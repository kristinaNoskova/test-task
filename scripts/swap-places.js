const promoListElement = document.querySelector('.promo-list');
const promoLinkBlockElement = document.querySelector('.promo-item--link');
const promoCollectionBlockElement = document.querySelector('.promo-item--collection');
const headerButtonElement = document.querySelector('.header__button--two');

let isLinkBlockDisplayed = false;

const swapBlocksClickHandler = () => {
    isLinkBlockDisplayed = !isLinkBlockDisplayed;

    if (isLinkBlockDisplayed) {
        promoListElement.insertBefore(promoLinkBlockElement, promoCollectionBlockElement);
    } else {
        promoListElement.insertBefore(promoCollectionBlockElement, promoLinkBlockElement);
    }
}

const addSwapBlocksHandler = () => {
    headerButtonElement.addEventListener('click', swapBlocksClickHandler)
}

export { addSwapBlocksHandler }
