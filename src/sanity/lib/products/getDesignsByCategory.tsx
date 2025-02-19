import { defineQuery } from 'next-sanity';

import { sanityFetch } from '../live';


export const getDesignsByCategory = async (categorySlug: string) => {
  const DESIGNS_BY_CATEGORY_QUERY = defineQuery(`
      *[
        _type == "design" 
        && references(*[_type == "category" && slug.current == $categorySlug]._id)
      ] | order(name asc)
    `);

  try {
    const designs = await sanityFetch({
      query: DESIGNS_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });

    return designs.data || [];
    
  } catch (error) {
    console.error("Error fetching design by category: ", error);
    return [];
  };
};