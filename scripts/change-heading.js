const promoListElement = document.querySelector('.promo-list');
const promoHeroBlockElement = promoListElement.querySelector('.promo-item--hero');
const promoDescBlockElement = promoListElement.querySelector('.promo-item--desktop');
const promoDescElement = promoListElement.querySelector('.promo-item__descr');
const promoTitleElement = promoListElement.querySelector('.promo__title');

const headerButtonElement = document.querySelector('.header__button--one');

let isTitleInHero = false;


const changeHeadingPosition = () => {
    promoHeroBlockElement.removeChild(promoTitleElement);
    promoHeroBlockElement.style.setProperty('display', 'none');

    promoDescBlockElement.removeChild(promoDescElement);
    promoDescBlockElement.appendChild(promoTitleElement);
    promoTitleElement.style.setProperty('font-size', '40px');
}


const resetHeadingPosition = () => {
    promoDescBlockElement.removeChild(promoTitleElement);
    promoDescBlockElement.appendChild(promoDescElement);
    promoTitleElement.style.setProperty('font-size', '80px');

    promoHeroBlockElement.style.setProperty('display', 'flex');
    promoHeroBlockElement.appendChild(promoTitleElement);
}

const headingPositionClickHandler = () => {
    isTitleInHero = !isTitleInHero;

    if (isTitleInHero) {
        changeHeadingPosition();
    } else {
        resetHeadingPosition();
    }
}

const addHeadingPositionHandler = () => {
    headerButtonElement.addEventListener('click', headingPositionClickHandler);
}


export { addHeadingPositionHandler };