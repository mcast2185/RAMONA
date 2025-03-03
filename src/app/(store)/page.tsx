import Home from '../../pages/home';
import Transition from '../../pages/transitionAnimation';
import ContactInfo from '../../pages/contactinfo';
import Menu from '../../components/sectionalComponents/Menu';
// import Header from '@/components/sectionalComponents/Header';
import ScrollComponent from '../../components/animatedComponents/ScrollComponent';

// import "../../styles/globals.css";

export const dynamic = "force-static";
export const revalidate = 60;

const index = () => {

  return (
    <div className='App overflow-x-hidden'>
      {/* <Header/> */}
      {/* <Transition/> */}
      <Menu />
      <ScrollComponent>
        <Home />
        <ContactInfo />
      </ScrollComponent>
    </div>
  );
};

export default index;

// import ProductsView from "@/components/ProductsView";
// import { getAllDesigns } from "@/sanity/lib/products/getAllDesigns";
// import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
// import { getAllCategories } from "@/sanity/lib/products/getAllCategories";



// export default async function Home() {
//   const designs = await getAllDesigns();
//   const products = await getAllProducts();
//   const categories = await getAllCategories();

//   return (
//     <div>
//       <div className='flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4'>
//         <ProductsView categories={categories} designs={designs} products={products}/>
//       </div>
//     </div>
//   );
// };