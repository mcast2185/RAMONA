import Link from "next/link";
import { Design } from "../../sanity.types";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

function DesignThumb({ design }: { design: Design }) {
  const isOutOfStock = design.stock != null && design.stock <= 0;

  // were going to remove the bg and text around the images. remove truncate css from design name h2 tag

  return (
    <Link href={`/design/${design.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm justify-center items-center p-1
      hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}>
      <div className='relative aspect-square w-full h-full overflow-hidden'>
        {design.image && (
          <Image
            className="object-cover transition-transform duration-300 hover:brightness-50 hover:scale-105  ease-out "
            src={imageUrl(design.image).url()}
            alt={design.name || "design image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {isOutOfStock && (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <span className='text-white font-bold text-lg'>
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <div className='p-2'>
        <h2 className='text-lg font-semibold text-gray-800 '>
          {design.name}
        </h2>
        <p className='my-2 text-sm text-gray-600 text-wrap '>
          {design.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            ).join(" ") || "No description available"
          }
        </p>
      </div>
    </Link>
  );
};

export default DesignThumb;