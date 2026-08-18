import { state } from "./state/catalog-state.js";
import { dom } from "./ui/dom.js";
import {
  clearNavCategory,
  clearPanelCategories,
  resetFilterControls,
  setupFilterOptions,
  updateArrayFilter,
  updatePriceLabels
} from "./ui/filters.js";
import { renderProducts } from "./ui/product-list.js";
import { changeModalImage, closeProduct, openProduct } from "./ui/product-modal.js";

function renderCatalog() {
  updatePriceLabels();
  renderProducts();
}

function setupCatalogEvents() {
  dom.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderProducts();
  });

  dom.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderProducts();
  });

  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      state.navCategory = tab.dataset.category;
      clearPanelCategories();
      renderProducts();
    });
  });

  document.addEventListener("change", (event) => {
    const filterKey = event.target.dataset.filter;
    if (!filterKey) return;

    if (filterKey === "categories") {
      clearNavCategory();
    }

    updateArrayFilter(filterKey, event.target);
    renderProducts();
  });

  dom.newOnly.addEventListener("change", (event) => {
    state.newOnly = event.target.checked;
    renderProducts();
  });

  dom.promoOnly.addEventListener("change", (event) => {
    state.promoOnly = event.target.checked;
    renderProducts();
  });

  dom.minPrice.addEventListener("input", (event) => {
    state.minPrice = Number(event.target.value || 0);
    renderCatalog();
  });

  dom.maxPrice.addEventListener("input", (event) => {
    state.maxPrice = Number(event.target.value || 180);
    dom.priceRange.value = state.maxPrice;
    renderCatalog();
  });

  dom.priceRange.addEventListener("input", (event) => {
    state.maxPrice = Number(event.target.value);
    dom.maxPrice.value = state.maxPrice;
    renderCatalog();
  });

  dom.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  dom.categorySearch.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    document.querySelectorAll("#categoryChecks label").forEach((label) => {
      label.style.display = label.dataset.filterLabel.includes(value) ? "flex" : "none";
    });
  });

  dom.clearFilters.addEventListener("click", () => {
    resetFilterControls();
    renderProducts();
  });
}

function setupModalEvents() {
  dom.grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (button) openProduct(button.dataset.productId);
  });

  dom.closeModal.addEventListener("click", closeProduct);
  dom.prevImage.addEventListener("click", () => changeModalImage(-1));
  dom.nextImage.addEventListener("click", () => changeModalImage(1));
  dom.productModal.addEventListener("click", (event) => {
    if (event.target.id === "productModal") closeProduct();
  });
}

function setupShellEvents() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProduct();
      document.body.classList.remove("filters-open");
      dom.filtersPanel.classList.remove("open");
    }
  });

  dom.accountButton.addEventListener("click", () => {
    dom.accountMenu.classList.toggle("open");
  });

  dom.openFilters.addEventListener("click", () => {
    document.body.classList.add("filters-open");
    dom.filtersPanel.classList.add("open");
  });

  dom.closeFilters.addEventListener("click", () => {
    document.body.classList.remove("filters-open");
    dom.filtersPanel.classList.remove("open");
  });
}

setupFilterOptions();
setupCatalogEvents();
setupModalEvents();
setupShellEvents();
renderCatalog();
