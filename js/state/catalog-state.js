export const defaultState = {
  query: "",
  navCategory: "Todas",
  categories: [],
  brands: [],
  sizes: [],
  colors: [],
  newOnly: false,
  promoOnly: false,
  minPrice: 0,
  maxPrice: 180,
  sort: "relevance"
};

export const state = { ...defaultState };

export function resetState() {
  Object.assign(state, defaultState);
}
