export const formatPrice = (value) => `Bs. ${Number(value).toFixed(2)}`;

export function getProductImages(product) {
  return product.images?.length ? product.images : [product.image];
}
