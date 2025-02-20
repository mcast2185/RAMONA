import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";


export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("User ID is required");
  };
  const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
      ...,
      products[]{
        ...,
        product->
      },
      designs[]{
        ...,
        product->
      }
    }
  `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: {userId}
    });

    return orders.data || [];
  } catch (err) {
    console.error("Error fetching orders:", err);
    throw new Error("Error fetching orders");
  };
};