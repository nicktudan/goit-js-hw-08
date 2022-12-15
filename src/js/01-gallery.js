
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description
}) => acc + `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, '');

gallery.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
