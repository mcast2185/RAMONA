import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";


export const getDesignBySlug = async (slug: string) => {
  const DESIGN_BY_ID_QUERY = defineQuery(`
      *[
          _type == "design" && slug.current == $slug
      ] | order(name asc) [0]
    `);

  try {
    const design = await sanityFetch({
      query: DESIGN_BY_ID_QUERY,
      params: {
        slug,
      },
    });

    return design.data || null;
    
  } catch (error) {
    console.error("Error fetching design by ID: ", error);
    return null;
  };
};