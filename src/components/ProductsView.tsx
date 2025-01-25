import ProductGrid from "./ProductGrid";
import { Category, Design, Product } from "../../sanity.types";
import { CategorySelectorComponent } from "./ui/category-selector";
import DesignGrid from "./DesignGrid";

interface ProductsViewProps {
  products: Product[];
  designs: Design[];
  categories: Category[];
};

const ProductsView = ({products, designs, categories}: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      {/* categories */}
      <div className='w-full sm:w-[200px]'>
        <CategorySelectorComponent categories={categories} />
      </div>

      {/* products */}
      <div className='flex-1'>
        <div className=''>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4"/>
          <DesignGrid designs={designs} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;