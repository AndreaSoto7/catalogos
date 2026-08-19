import { products } from "../data/products.js";
import { state } from "../state/catalog-state.js";
import { formatPrice, getProductImages } from "../utils/product-utils.js";
import { dom } from "./dom.js";

function productMatches(product) {
  const searchText = [
    product.name,
    product.category,
    product.brand,
    product.description,
    product.colors.join(" "),
    product.sizes.join(" ")
  ].join(" ").toLowerCase();

  const matchesSearch = searchText.includes(state.query.toLowerCase());
  const matchesNav = state.navCategory === "Todas" || product.category === state.navCategory;
  const matchesCategory = !state.categories.length || state.categories.includes(product.category);
  const matchesBrand = !state.brands.length || state.brands.includes(product.brand);
  const matchesSize = !state.sizes.length || product.sizes.some((size) => state.sizes.includes(size));
  const matchesColor = !state.colors.length || product.colors.some((color) => state.colors.includes(color));
  const matchesNew = !state.newOnly || product.isNew;
  const matchesPromo = !state.promoOnly || product.promo;
  const matchesPrice = product.price >= state.minPrice && product.price <= state.maxPrice;

  return matchesSearch && matchesNav && matchesCategory && matchesBrand && matchesSize && matchesColor && matchesNew && matchesPromo && matchesPrice;
}

function sortProducts(items) {
  const sorted = [...items];
  const byName = (a, b) => a.name.localeCompare(b.name, "es");

  if (state.sort === "priceAsc") sorted.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") sorted.sort((a, b) => b.price - a.price);
  if (state.sort === "recent") sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (state.sort === "az") sorted.sort(byName);
  if (state.sort === "za") sorted.sort((a, b) => byName(b, a));

  return sorted;
}

function renderTags() {
  const tags = [];
  if (state.query) tags.push(`Búsqueda: ${state.query}`);
  if (state.navCategory !== "Todas") tags.push(state.navCategory);
  tags.push(...state.categories, ...state.brands, ...state.sizes, ...state.colors);
  if (state.newOnly) tags.push("Nuevo");
  if (state.promoOnly) tags.push("Promoción");
  if (state.minPrice > 0 || state.maxPrice < 180) tags.push(`${formatPrice(state.minPrice)} - ${formatPrice(state.maxPrice)}`);

  dom.activeTags.innerHTML = [...new Set(tags)].map((tag) => `<span class="tag">${tag}</span>`).join("");
}

export function renderProducts() {
  const filtered = sortProducts(products.filter(productMatches));

  dom.resultCount.textContent = `${filtered.length} producto${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`;
  dom.emptyState.classList.toggle("show", filtered.length === 0);

  dom.grid.innerHTML = filtered.map((product) => {
    const images = getProductImages(product);
    const hoverImage = images[1] || images[0];

    return `
    <article class="product-card">
      <button type="button" data-product-id="${product.id}">
        <div class="product-image">
          <img class="primary-photo" src="${images[0]}" alt="${product.name}" loading="lazy">
          ${images.length > 1 ? `<img class="hover-photo" src="${hoverImage}" alt="${product.name}" loading="lazy">` : ""}
          <div class="badges">
            ${product.discount ? `<span class="badge">${product.discount}% descuento</span>` : ""}
            ${product.isNew ? '<span class="badge new">Nuevo</span>' : ""}
          </div>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="product-code">${product.id}</div>
          <div class="meta">${product.category} · ${product.brand}</div>
          <div class="prices">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
          </div>
        </div>
      </button>
    </article>
  `;
  }).join("");

  renderTags();
}
