'use server';

import stripe from "@/lib/stripe";

import { imageUrl } from "@/lib/imageUrl";
import { BasketItem } from "../store/store";


export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
}

export type GroupedBasketItem = {
  product: BasketItem["product"];
  design: BasketItem["design"];
  quantity: number;

};


export async function createCheckoutSession(
  items: GroupedBasketItem[],
  metadata: Metadata
) {
  try {
    const designsWithoutPrice = items.filter((item) => !item.design.price);
    const productsWithoutPrice = items.filter((item) => !item.product.price);

    if (productsWithoutPrice.length > 0) {
      throw new Error("Some items do not have a price");
    };

    if (designsWithoutPrice.length > 0) {
      throw new Error("Some items do not have a price");
    };

    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    let customerId: string | undefined;

    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    };

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_creation: customerId ? undefined : "always",
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      allow_promotion_codes: true,
      success_url: `${`https://${process.env.VERCEL_URL}` || 
        process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}$orderNumber=${metadata.orderNumber}`,
      cancel_url: `${`https://${process.env.VERCEL_URL}` || process.env.NEXT_PUBLIC_BASE_URL}/basket`,
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.product.price! * 100) || Math.round(item.design.price! * 100),
          product_data: {
            name: item.product.name || item.design.name || "Unnamed",
            description: `Product ID: ${item.product._id}` || `Design ID: ${item.design._id}`,
            metadata: {
              id: item.product._id || item.design._id
            },
            images: item.product.image ? 
              [imageUrl(item.product.image).url()] : item.design.image ? 
              [imageUrl(item.design.image).url()] : undefined,
          },
        },
        quantity: item.quantity,
      })),
    });

    return session.url;
  } catch (error) {
    console.error("Error creating checkout session: ", error);
    throw error;
  };
};