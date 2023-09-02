import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

function createMarkup (arr) {
    return arr.map(({preview, original, description}) => {
return `<li class= "gallery__item" id="preview">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>
</li>`;
    })
    .join('');
};

container.insertAdjacentHTML('beforeend', markup);
// container.addEventListener('click', handlePhoto);

// function handlePhoto(event) {
//     if (event.target === event.currentTarget) {
//       return;
//     }
//     event.preventDefault();

//     const instance = basicLightbox.create(
//       `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
//     );
//     instance.show();
// };
const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

// console.log(galleryItems);
