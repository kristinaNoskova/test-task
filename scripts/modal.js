const pageElement = document.querySelector('.page');
const modalContainerElement = pageElement.querySelector('.modal-container');
const modalElement = pageElement.querySelector('.modal');

const modalButtonElement = pageElement.querySelector('.modal__close');

const openModalLoadedHandler = () => {
    modalContainerElement.classList.remove('modal-container--close');
    pageElement.classList.add('modal-open');
    modalContainerElement.addEventListener('click', modalContainerClickHandler);

}

const closeModalClickHandler = () => {
    modalContainerElement.classList.add('modal-container--close');
    pageElement.classList.remove('modal-open');
    modalContainerElement.removeEventListener('click', modalContainerClickHandler);
}

modalButtonElement.addEventListener('click', closeModalClickHandler);

function modalContainerClickHandler(evt) {
    if (!modalElement.contains(evt.target)) {
        closeModalClickHandler();
        modalContainerElement.removeEventListener('click', modalContainerClickHandler);
    }
}

export { openModalLoadedHandler }