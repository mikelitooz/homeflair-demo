import { Product, Category } from "@/data/ecommerce";
import { ShopifyProductEdge, ShopifyCollectionEdge } from "./shopify-types";

// Helper to convert Shopify product format to our frontend Product format
export function normalizeShopifyProduct(edge: ShopifyProductEdge): Product {
  const node = edge.node;
  
  // Extract images
  const images = node.images.edges.map((imgEdge) => imgEdge.node.url);
  
  // Provide fallbacks since we might be loading dummy data
  return {
    slug: node.handle,
    name: node.title,
    // Just grab the first collection as the category, or default to "misc"
    category: node.collections.edges[0]?.node.handle || "misc",
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    compareAtPrice: node.compareAtPriceRange ? parseFloat(node.compareAtPriceRange.minVariantPrice.amount) : undefined,
    
    // Custom metafields, or fallback to description/defaults
    shortDescription: node.metafield_short_desc?.value || node.description.substring(0, 100) + "...",
    description: node.descriptionHtml || node.description,
    
    dimensions: node.metafield_dimensions?.value || "Standard dimensions",
    materials: node.metafield_materials?.value || "Standard materials",
    delivery: node.metafield_delivery?.value || "Standard delivery",
    
    images: images.length > 0 ? images : ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85"], // Fallback image
    
    badge: node.metafield_badge?.value,
    featured: node.tags.includes("featured"),
    bestSeller: node.tags.includes("bestseller"),
    newArrival: node.tags.includes("new"),
    offer: node.compareAtPriceRange ? true : false,
    
    room: (node.metafield_room?.value as any) || "Living Room",
    
    // Store variant ID for adding to cart
    variantId: node.variants.edges[0]?.node.id,
  };
}

export function normalizeShopifyCollection(edge: ShopifyCollectionEdge): Category {
  const node = edge.node;
  return {
    slug: node.handle,
    name: node.title,
    description: node.description,
    heroImage: node.image?.url || "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1500&q=85", // Fallback image
  };
}
