import AddToBasketProductButton from "@/components/ui/AddToBasketProductButton";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/imageUrl";
import { getDesignBySlug } from "@/sanity/lib/products/getDesignBySlug";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";


const ProductPage = async ({params}: { params: Promise<{slug: string}>}) => {
  const {slug} = await params;
  const product = await getProductBySlug(slug);
  const design = await getDesignBySlug(slug);


  if (!product) {
    return notFound();
  };

  // if (!design) {
  //   return notFound();
  // };


  const productIsOutOfStock = product.stock != null && product.stock <= 0;
  // const designIsOutOfStock = design.stock != null && design.stock <= 0;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className={`relative aspect-square overflow-hidden 
          rounded-lg shadow-lg ${productIsOutOfStock ? "opacity-50" : ""}`}>
          {product.image && (
            <Image
              className="object-cover transition-transform duration-700 hover:scale-105 ease-out"
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {productIsOutOfStock && (
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <span className='text-white font-bold text-lg'>
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold mb-4'>
              {product.name}
            </h1>
            <div className='text-xl font-semibold mb-4'>
              ${product.price?.toFixed(2)}
            </div>
            <div className='prose max-w-none mb-6'>
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
          </div>
          <div className='mt-6'>
            <AddToBasketProductButton product={product} ></AddToBasketProductButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;