
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("div.gallery");

const galleryImgs = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
};

const photos = galleryImgs(galleryItems);
gallery.insertAdjacentHTML("beforeend", photos);

gallery.addEventListener("click", markup);

function markup(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
	<img src="${evt.target.dataset.source}" width="800" height="600" />
`,
    {
      onClose: (instance) => {
        gallery.removeEventListener("keydown", onHandlerEscape);
      },
    }
  );
  instance.show();

  gallery.addEventListener("keydown", onHandlerEscape);

  function onHandlerEscape(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
  console.log(evt.target === evt.currentTarget);
}
