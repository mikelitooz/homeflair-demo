import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { ShopifyProductEdge, ShopifyCollectionEdge } from "./shopify-types";

// Fallback to demo credentials if not provided
const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "mock.shop";
const publicAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "mock-shop-token";

export const shopify = createStorefrontApiClient({
  storeDomain: storeDomain.includes("://") ? storeDomain : `https://${storeDomain}`,
  apiVersion: "2026-01",
  publicAccessToken,
});

export const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          collections(first: 1) {
            edges {
              node {
                handle
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          metafield_short_desc: metafield(namespace: "custom", key: "short_description") { value }
          metafield_dimensions: metafield(namespace: "custom", key: "dimensions") { value }
          metafield_materials: metafield(namespace: "custom", key: "materials") { value }
          metafield_delivery: metafield(namespace: "custom", key: "delivery") { value }
          metafield_room: metafield(namespace: "custom", key: "room") { value }
          metafield_badge: metafield(namespace: "custom", key: "badge") { value }
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      collections(first: 1) {
        edges {
          node {
            handle
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
      metafield_short_desc: metafield(namespace: "custom", key: "short_description") { value }
      metafield_dimensions: metafield(namespace: "custom", key: "dimensions") { value }
      metafield_materials: metafield(namespace: "custom", key: "materials") { value }
      metafield_delivery: metafield(namespace: "custom", key: "delivery") { value }
      metafield_room: metafield(namespace: "custom", key: "room") { value }
      metafield_badge: metafield(namespace: "custom", key: "badge") { value }
    }
  }
`;

export const COLLECTIONS_QUERY = `
  query Collections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            url
          }
        }
      }
    }
  }
`;

export const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    handle
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CART_ADD_LINES_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    handle
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CART_UPDATE_LINES_MUTATION = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    handle
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CART_REMOVE_LINES_MUTATION = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    handle
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                product {
                  handle
                  title
                  images(first: 1) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
