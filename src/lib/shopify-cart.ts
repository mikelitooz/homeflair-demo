import { shopify, CART_CREATE_MUTATION, CART_ADD_LINES_MUTATION, CART_UPDATE_LINES_MUTATION, CART_REMOVE_LINES_MUTATION, CART_QUERY } from "./shopify";

export async function createCart() {
  try {
    const { data } = await shopify.request(CART_CREATE_MUTATION, { variables: { input: {} } });
    return data.cartCreate.cart;
  } catch (error) {
    console.error("Error creating cart:", error);
    return null;
  }
}

export async function getCart(cartId: string) {
  try {
    const { data } = await shopify.request(CART_QUERY, { variables: { cartId } });
    return data.cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
}

export async function addToCart(cartId: string, variantId: string, quantity: number) {
  try {
    const { data } = await shopify.request(CART_ADD_LINES_MUTATION, {
      variables: {
        cartId,
        lines: [{ merchandiseId: variantId, quantity }]
      }
    });
    return data.cartLinesAdd.cart;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  try {
    const { data } = await shopify.request(CART_UPDATE_LINES_MUTATION, {
      variables: {
        cartId,
        lines: [{ id: lineId, quantity }]
      }
    });
    return data.cartLinesUpdate.cart;
  } catch (error) {
    console.error("Error updating cart line:", error);
    return null;
  }
}

export async function removeCartLine(cartId: string, lineId: string) {
  try {
    const { data } = await shopify.request(CART_REMOVE_LINES_MUTATION, {
      variables: {
        cartId,
        lineIds: [lineId]
      }
    });
    return data.cartLinesRemove.cart;
  } catch (error) {
    console.error("Error removing from cart:", error);
    return null;
  }
}
