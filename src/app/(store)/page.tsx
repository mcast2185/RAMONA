import ProductsView from "@/components/ProductsView";
import { getAllDesigns } from "@/sanity/lib/products/getAllDesigns";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const designs = await getAllDesigns();
  const categories = await getAllCategories();

  return (
    <div>
      <div className='flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4'>
        <ProductsView categories={categories} designs={designs} products={products}/>
      </div>
    </div>
  );
};