let spinner = document.querySelector('[data-spinner]');
const spinnerWrap = document.querySelector('.spinner__wrap');
const hideBar = document.querySelector('body');
const imgAnimation = document.querySelector('[data-logo]');

function spinnerAnimation() {
    hideBar.style.overflow = 'hidden';
    spinnerWrap.classList.add('spinner--animation');
    setTimeout(() => {
        spinner.parentElement.removeChild(spinner);
        hideBar.style.overflow = 'initial';
        imgAnimation.classList.add('logo--animation');
    }, 2000);
}

window.addEventListener('load', spinnerAnimation);