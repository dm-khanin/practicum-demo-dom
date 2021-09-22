const modalWindow = document.querySelector('.popup');
const modalCloseButton = document.querySelector('.popup__close');
const aboutProjectLink = document.querySelector('.header__about-project');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_is-opened');
}

modalCloseButton.addEventListener('click', toggleModalWindow);
aboutProjectLink.addEventListener('click', toggleModalWindow);

function onOverlayClick(e) {
  if (e.target === e.currentTarget) {
    toggleModalWindow();
  }
}

modalWindow.addEventListener('click', onOverlayClick);

for (const elem of document.querySelectorAll('*')) {
  elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
  elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
}
