import { products } from "../data/products.js";
import { formatPrice, getProductImages } from "../utils/product-utils.js";
import { dom } from "./dom.js";

let modalProduct = null;
let modalImageIndex = 0;

function renderModalImage() {
  if (!modalProduct) return;

  const images = getProductImages(modalProduct);
  dom.modalImage.src = images[modalImageIndex];
  dom.modalImage.alt = `${modalProduct.name} - imagen ${modalImageIndex + 1}`;
  dom.galleryCounter.textContent = `${modalImageIndex + 1} / ${images.length}`;
  dom.prevImage.hidden = images.length <= 1;
  dom.nextImage.hidden = images.length <= 1;
  dom.galleryCounter.hidden = images.length <= 1;
}

export function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  modalProduct = product;
  modalImageIndex = 0;
  renderModalImage();
  dom.modalCategory.textContent = product.category;
  dom.modalTitle.textContent = product.name;
  dom.modalDescription.textContent = product.description;
  dom.modalBrand.textContent = product.brand;
  dom.modalStatus.textContent = product.status;
  dom.modalSizes.textContent = product.sizes.join(", ");
  dom.modalColors.textContent = product.colors.join(", ");
  dom.modalPrice.innerHTML = `
    <div class="prices">
      <span class="current-price">${formatPrice(product.price)}</span>
      ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
      ${product.discount ? `<span class="badge">-${product.discount}%</span>` : ""}
    </div>
  `;

  dom.productModal.classList.add("open");
  dom.productModal.setAttribute("aria-hidden", "false");
}

export function changeModalImage(direction) {
  if (!modalProduct) return;

  const images = getProductImages(modalProduct);
  modalImageIndex = (modalImageIndex + direction + images.length) % images.length;
  renderModalImage();
}

export function closeProduct() {
  dom.productModal.classList.remove("open");
  dom.productModal.setAttribute("aria-hidden", "true");
  modalProduct = null;
  modalImageIndex = 0;
}
