export type ShopifyProductEdge = {
  node: {
    id: string;
    handle: string;
    title: string;
    descriptionHtml: string;
    description: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    compareAtPriceRange?: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: {
        node: {
          url: string;
          altText: string;
        };
      }[];
    };
    collections: {
      edges: {
        node: {
          handle: string;
        };
      }[];
    };
    variants: {
      edges: {
        node: {
          id: string;
        };
      }[];
    };
    tags: string[];
    // Metafields for custom specs like dimensions, materials, delivery
    metafield_short_desc?: { value: string };
    metafield_dimensions?: { value: string };
    metafield_materials?: { value: string };
    metafield_delivery?: { value: string };
    metafield_room?: { value: string };
    metafield_badge?: { value: string };
  };
};

export type ShopifyCollectionEdge = {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    image?: {
      url: string;
    };
  };
};
