const wppButton = document.querySelector('[data-wpp]');
const time2 = 500;

const move = ()=>{
    wppButton.classList.toggle('move');
}

const wppFunction = ()=>{
    setInterval(move,time2);
}

window.addEventListener('load', wppFunction);

