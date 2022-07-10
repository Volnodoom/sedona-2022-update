const mainPage = document.querySelector('.page-main');
const searchBtn = mainPage.querySelector('.hotel-search__button-initialization');
const modalWindow = document.querySelector('.modal');
const modalOutside = modalWindow.querySelector('.modal__overlay');
const submitBtn = modalWindow.querySelector('.modal-search-form')
const title = modalWindow.querySelector('h2');
const form = modalWindow.querySelector('form');

const handleModalClick = () => {
  modalWindow.classList.toggle('is-active');
}

const handleModalOutsideClick = (evt) => {
  const target = evt.target;
  const currentTarget = evt.currentTarget;

  if(target === title) {
    return;
  }

  if(currentTarget === form) {
    return;
  }

  modalWindow.classList.toggle('is-active');
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  modalWindow.classList.toggle('is-active');
}

searchBtn.addEventListener('click', handleModalClick);
modalWindow.addEventListener('click', handleModalOutsideClick);
submitBtn.addEventListener('click', handleFormSubmit);
