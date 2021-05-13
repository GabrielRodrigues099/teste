/*galeria de imagens*/
let time = 2000;
let courrentImage = 0;
let images = document.querySelectorAll('[data-image]');
const maxImages = images.length;


const banner = ()=>{

    images[courrentImage].classList.remove('selected');

    courrentImage++

    if (courrentImage >= maxImages) {
        courrentImage = 0;
    }

    images[courrentImage].classList.add('selected');
} 

export const startBanner = ()=>{
    setInterval(banner, time);
}