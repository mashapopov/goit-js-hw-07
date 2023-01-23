import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("ul.gallery");

const galleryImgs = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" 
      href="${original}"><img class="gallery__image" 
      src="${preview}" 
      alt="${description}" /></a></li>`;
    })
    .join("");
};

const photos = galleryImgs(galleryItems);
gallery.insertAdjacentHTML("beforeend", photos);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


