import ProductGrid from "./ProductGrid";
import { Category, Design, Product } from "../../sanity.types";
import { CategorySelectorComponent } from "./ui/category-selector";

interface ProductsViewProps {
  products: Product[];
  designs: Design[];
  categories: Category[];
};


const ProductsView = ({products, categories}: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      {/* categories */}
      <div className='w-full '>
        <CategorySelectorComponent categories={categories} />
      </div>

      {/* products */}
      <div className='flex-1'>
        <div className=''>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4"/>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;