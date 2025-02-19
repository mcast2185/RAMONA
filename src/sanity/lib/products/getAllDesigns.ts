import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";


export const getAllDesigns = async () => {
  const ALL_DESIGNS_QUERY = defineQuery(`
      *[
          _type == "design" 
      ] | order(name asc)
    `);

  try {
    const designs = await sanityFetch({
      query: ALL_DESIGNS_QUERY,
    });

    return designs.data || [];
    
  } catch (error) {
    console.error("Error fetching all designs: ", error);
    return [];
  };
};