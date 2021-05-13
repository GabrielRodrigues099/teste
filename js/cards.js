const cards = document.querySelectorAll('[data-card]');
let cardsPosition = 0;
const cardsMax = cards.length;
const block = document.querySelector('[data-button]');

const startCards = ()=> {
    cards[cardsPosition].classList.remove('selected');
    cards[cardsPosition].classList.add('block');

    cardsPosition++;

        if (cardsPosition >= cardsMax) {
        cardsPosition = 0;
    }

    cards[cardsPosition].classList.remove('block');
    cards[cardsPosition].classList.add('selected');
   
}


block.addEventListener('click', startCards);