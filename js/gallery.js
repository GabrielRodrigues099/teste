const time = 4000;
let courrentImage = 0
const images = document.querySelectorAll('[data-gallery]');
const maxImages = images.length;

const gallery = () =>{
    images[courrentImage].classList.remove('selected');

    courrentImage++ 

    if(courrentImage >= maxImages){
        courrentImage = 0;
    }

    images[courrentImage].classList.add('selected');
}

const startGallery = () =>{
    setInterval(gallery, time);
}

window.addEventListener('load', startGallery);

