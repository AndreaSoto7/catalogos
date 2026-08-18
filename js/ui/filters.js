import { categories, brands, sizes, colors } from "../data/products.js";
import { defaultState, state } from "../state/catalog-state.js";
import { formatPrice } from "../utils/product-utils.js";
import { dom } from "./dom.js";

export function createCheckboxes(containerId, values, key) {
  const container = document.querySelector(containerId);
  container.innerHTML = values.map((value) => `
    <label data-filter-label="${value.toLowerCase()}">
      <input type="checkbox" value="${value}" data-filter="${key}">
      ${value}
    </label>
  `).join("");
}

export function createColorChecks() {
  const colorMap = {
    Rosa: "#df7fa4",
    Blanco: "#ffffff",
    Azul: "#4079bd",
    Verde: "#4a9c75",
    Negro: "#1f1d20",
    Beige: "#d2b28d"
  };

  document.querySelector("#colorChecks").innerHTML = colors.map((color) => `
    <label>
      <input type="checkbox" value="${color}" data-filter="colors">
      <span class="color-dot" style="width:16px;height:16px;border-radius:50%;border:1px solid #cfc7c7;background:${colorMap[color]}"></span>
      ${color}
    </label>
  `).join("");
}

export function setupFilterOptions() {
  createCheckboxes("#categoryChecks", categories, "categories");
  createCheckboxes("#brandChecks", brands, "brands");
  createCheckboxes("#sizeChecks", sizes, "sizes");
  createColorChecks();
}

export function updatePriceLabels() {
  dom.minPriceLabel.textContent = formatPrice(state.minPrice);
  dom.maxPriceLabel.textContent = formatPrice(state.maxPrice);
}

export function updateArrayFilter(key, checkbox) {
  const value = checkbox.value;
  state[key] = checkbox.checked
    ? [...state[key], value]
    : state[key].filter((item) => item !== value);
}

export function clearNavCategory() {
  state.navCategory = "Todas";
  document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.remove("active"));
}

export function clearPanelCategories() {
  state.categories = [];
  document.querySelectorAll('input[data-filter="categories"]').forEach((input) => {
    input.checked = false;
  });
}

export function syncFilterControls() {
  dom.searchInput.value = state.query;
  dom.newOnly.checked = state.newOnly;
  dom.promoOnly.checked = state.promoOnly;
  dom.minPrice.value = state.minPrice;
  dom.maxPrice.value = state.maxPrice;
  dom.priceRange.value = state.maxPrice;
  dom.sortSelect.value = state.sort;
  document.querySelectorAll("[data-filter]").forEach((input) => input.checked = false);
  document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.remove("active"));
  updatePriceLabels();
}

export function resetFilterControls() {
  Object.assign(state, defaultState);
  syncFilterControls();
}
