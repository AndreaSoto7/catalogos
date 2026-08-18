const products = [
  {
    id: "BL-001",
    name: "Blusa Karen",
    category: "Blusas",
    brand: "Daluas",
    price: 69,
    oldPrice: 89,
    discount: 22,
    isNew: true,
    promo: true,
    sizes: ["S", "M", "L"],
    colors: ["Rosa", "Blanco"],
    status: "Publicado",
    createdAt: "2026-08-12",
    description: "Blusa ligera con manga corta, textura suave y caída fresca para uso diario.",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "VD-018",
    name: "Vestido Emilia",
    category: "Vestidos",
    brand: "Luna Rosa",
    price: 118,
    oldPrice: 145,
    discount: 19,
    isNew: false,
    promo: true,
    sizes: ["XS", "S", "M"],
    colors: ["Azul", "Blanco"],
    status: "Publicado",
    createdAt: "2026-07-30",
    description: "Vestido midi con corte femenino, ideal para salidas de tarde y eventos casuales.",
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "CN-104",
    name: "Conjunto Martina",
    category: "Conjuntos",
    brand: "Atelier Sol",
    price: 136,
    oldPrice: null,
    discount: null,
    isNew: true,
    promo: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Verde", "Negro"],
    status: "Publicado",
    createdAt: "2026-08-16",
    description: "Conjunto coordinado de top y pantalón fluido con acabado elegante y cómodo.",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "TP-044",
    name: "Top Valentina",
    category: "Tops / Cropped",
    brand: "Daluas",
    price: 42,
    oldPrice: 55,
    discount: 24,
    isNew: false,
    promo: true,
    sizes: ["XS", "S", "M"],
    colors: ["Rosa", "Negro"],
    status: "Publicado",
    createdAt: "2026-08-01",
    description: "Top cropped de tirantes con tejido elástico y colores fáciles de combinar.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "PT-071",
    name: "Pantalón Olivia",
    category: "Pantalones",
    brand: "Bella Norte",
    price: 94,
    oldPrice: null,
    discount: null,
    isNew: false,
    promo: false,
    sizes: ["M", "L", "XL"],
    colors: ["Negro", "Beige"],
    status: "Publicado",
    createdAt: "2026-07-22",
    description: "Pantalón de tiro alto con pierna recta, pensado para oficina o looks casuales.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "SF-092",
    name: "Falda Camila",
    category: "Shorts / Faldas",
    brand: "Atelier Sol",
    price: 57,
    oldPrice: 76,
    discount: 25,
    isNew: true,
    promo: true,
    sizes: ["S", "M", "L"],
    colors: ["Blanco", "Verde"],
    status: "Publicado",
    createdAt: "2026-08-15",
    description: "Falda corta con cintura marcada, textura fresca y movimiento natural.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "LQ-009",
    name: "Short Lucia",
    category: "Liquidación",
    brand: "Bella Norte",
    price: 39,
    oldPrice: 68,
    discount: 43,
    isNew: false,
    promo: true,
    sizes: ["XS", "S"],
    colors: ["Azul", "Beige"],
    status: "Liquidación",
    createdAt: "2026-06-20",
    description: "Short casual en liquidación, cómodo para días cálidos y vacaciones.",
    image: "https://images.unsplash.com/photo-1506629905607-d9af1b01e9ae?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "BL-032",
    name: "Blusa Renata",
    category: "Blusas",
    brand: "Luna Rosa",
    price: 82,
    oldPrice: null,
    discount: null,
    isNew: true,
    promo: false,
    sizes: ["S", "M", "L"],
    colors: ["Blanco", "Negro"],
    status: "Publicado",
    createdAt: "2026-08-17",
    description: "Blusa de cuello delicado con botonadura frontal y corte amplio.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=82"
  },
  {
    id: "VD-021",
    name: "Vestido Aurora",
    category: "Vestidos",
    brand: "Daluas",
    price: 129,
    oldPrice: null,
    discount: null,
    isNew: false,
    promo: false,
    sizes: ["S", "M", "L"],
    colors: ["Rosa", "Verde"],
    status: "Publicado",
    createdAt: "2026-07-18",
    description: "Vestido corto de silueta suave con detalle en cintura y acabado femenino.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=82"
  }
];

const categories = ["Blusas", "Pantalones", "Conjuntos", "Tops / Cropped", "Shorts / Faldas", "Vestidos", "Liquidación"];
const brands = [...new Set(products.map((product) => product.brand))];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Rosa", "Blanco", "Azul", "Verde", "Negro", "Beige"];

const state = {
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

const grid = document.querySelector("#productsGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const activeTags = document.querySelector("#activeTags");

const formatPrice = (value) => `$${Number(value).toFixed(2)}`;

function createCheckboxes(containerId, values, key) {
  const container = document.querySelector(containerId);
  container.innerHTML = values.map((value) => `
    <label data-filter-label="${value.toLowerCase()}">
      <input type="checkbox" value="${value}" data-filter="${key}">
      ${value}
    </label>
  `).join("");
}

function createColorChecks() {
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

function renderProducts() {
  const filtered = sortProducts(products.filter(productMatches));

  resultCount.textContent = `${filtered.length} producto${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`;
  emptyState.classList.toggle("show", filtered.length === 0);

  grid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <button type="button" data-product-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="badges">
            ${product.isNew ? '<span class="badge new">Nuevo</span>' : ""}
            ${product.discount ? `<span class="badge">-${product.discount}%</span>` : ""}
          </div>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="meta">${product.category} · ${product.brand}</div>
          <div class="prices">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
          </div>
        </div>
      </button>
    </article>
  `).join("");

  renderTags();
}

function renderTags() {
  const tags = [];
  if (state.query) tags.push(`Búsqueda: ${state.query}`);
  if (state.navCategory !== "Todas") tags.push(state.navCategory);
  tags.push(...state.categories, ...state.brands, ...state.sizes, ...state.colors);
  if (state.newOnly) tags.push("Nuevo");
  if (state.promoOnly) tags.push("Promoción");
  if (state.minPrice > 0 || state.maxPrice < 180) tags.push(`${formatPrice(state.minPrice)} - ${formatPrice(state.maxPrice)}`);

  activeTags.innerHTML = [...new Set(tags)].map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function updateArrayFilter(key, checkbox) {
  const value = checkbox.value;
  state[key] = checkbox.checked
    ? [...state[key], value]
    : state[key].filter((item) => item !== value);
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  document.querySelector("#modalImage").src = product.image;
  document.querySelector("#modalImage").alt = product.name;
  document.querySelector("#modalCategory").textContent = product.category;
  document.querySelector("#modalTitle").textContent = product.name;
  document.querySelector("#modalDescription").textContent = product.description;
  document.querySelector("#modalBrand").textContent = product.brand;
  document.querySelector("#modalStatus").textContent = product.status;
  document.querySelector("#modalSizes").textContent = product.sizes.join(", ");
  document.querySelector("#modalColors").textContent = product.colors.join(", ");
  document.querySelector("#modalPrice").innerHTML = `
    <div class="prices">
      <span class="current-price">${formatPrice(product.price)}</span>
      ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
      ${product.discount ? `<span class="badge">-${product.discount}%</span>` : ""}
    </div>
  `;

  document.querySelector("#productModal").classList.add("open");
  document.querySelector("#productModal").setAttribute("aria-hidden", "false");
}

function closeProduct() {
  document.querySelector("#productModal").classList.remove("open");
  document.querySelector("#productModal").setAttribute("aria-hidden", "true");
}

function clearFilters() {
  Object.assign(state, {
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
  });

  document.querySelector("#searchInput").value = "";
  document.querySelector("#newOnly").checked = false;
  document.querySelector("#promoOnly").checked = false;
  document.querySelector("#minPrice").value = 0;
  document.querySelector("#maxPrice").value = 180;
  document.querySelector("#priceRange").value = 180;
  document.querySelector("#sortSelect").value = "relevance";
  document.querySelectorAll("[data-filter]").forEach((input) => input.checked = false);
  document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.category === "Todas"));
  renderProducts();
}

createCheckboxes("#categoryChecks", categories, "categories");
createCheckboxes("#brandChecks", brands, "brands");
createCheckboxes("#sizeChecks", sizes, "sizes");
createColorChecks();
renderProducts();

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderProducts();
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderProducts();
});

document.querySelectorAll(".category-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".category-tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.navCategory = tab.dataset.category;
    renderProducts();
  });
});

document.addEventListener("change", (event) => {
  const filterKey = event.target.dataset.filter;
  if (filterKey) {
    updateArrayFilter(filterKey, event.target);
    renderProducts();
  }
});

document.querySelector("#newOnly").addEventListener("change", (event) => {
  state.newOnly = event.target.checked;
  renderProducts();
});

document.querySelector("#promoOnly").addEventListener("change", (event) => {
  state.promoOnly = event.target.checked;
  renderProducts();
});

document.querySelector("#minPrice").addEventListener("input", (event) => {
  state.minPrice = Number(event.target.value || 0);
  renderProducts();
});

document.querySelector("#maxPrice").addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value || 180);
  document.querySelector("#priceRange").value = state.maxPrice;
  renderProducts();
});

document.querySelector("#priceRange").addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  document.querySelector("#maxPrice").value = state.maxPrice;
  renderProducts();
});

document.querySelector("#sortSelect").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelector("#categorySearch").addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  document.querySelectorAll("#categoryChecks label").forEach((label) => {
    label.style.display = label.dataset.filterLabel.includes(value) ? "flex" : "none";
  });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) openProduct(button.dataset.productId);
});

document.querySelector("#closeModal").addEventListener("click", closeProduct);
document.querySelector("#productModal").addEventListener("click", (event) => {
  if (event.target.id === "productModal") closeProduct();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProduct();
    document.body.classList.remove("filters-open");
    document.querySelector("#filtersPanel").classList.remove("open");
  }
});

document.querySelector("#accountButton").addEventListener("click", () => {
  document.querySelector("#accountMenu").classList.toggle("open");
});

document.querySelector("#openFilters").addEventListener("click", () => {
  document.body.classList.add("filters-open");
  document.querySelector("#filtersPanel").classList.add("open");
});

document.querySelector("#closeFilters").addEventListener("click", () => {
  document.body.classList.remove("filters-open");
  document.querySelector("#filtersPanel").classList.remove("open");
});

document.querySelector("#clearFilters").addEventListener("click", clearFilters);
