import { Menu } from '../../../components/Menu.js';
import { PopupWithForm } from '../../../components/PopupWithForm.js';
import { PopupWithImage } from '../../../components/PopupWithImage.js';
import { FormValidator } from '../../../components/FormValidator.js'
import { Popup } from '../../../components/Popup.js';
const formValidationPopupForm = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButton: 'popup__button_type_submit',
    inputList: '.popup__text',
    formPopup: '.popup__form',
    activeButtonClass: 'popup__button_condition_active',
    errorClass: 'popup__error',
    invisibleClass: 'invisible',
    openClass: 'open',
    closeButtonClass: 'popup__button_condition_close'
}
const congratulationPopup = new Popup(document.querySelector('.popup_type_congratulation'))
congratulationPopup.setEventListeners();
const errorPopup = new Popup(document.querySelector('.popup_type_error'))
errorPopup.setEventListeners();
const formValidator = new FormValidator(formValidationPopupForm)
formValidator.enableValidation();

// preload
window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

const popupAplicationSelector = document.querySelector('.popup-application')
const popupAplication = new PopupWithForm({ popup: popupAplicationSelector })
popupAplication.setEventListeners()
const menuSelector = document.querySelector('.menu');
const menuVisible = new Menu({
    selector: menuSelector,
    clickEvent: () => {
        formValidator.resetErrors()
        popupAplication.open()

    }

})
const openMenuBtn = document.querySelector('.header__nav')
openMenuBtn.addEventListener('click', () => menuVisible.open())
menuVisible.setEventListeners()
const popupPhotoSelector = document.querySelector('.popup_type_photo')
const popupPhotoSignature = document.querySelector('.popup__signature')
const popupPhotoImg = document.querySelector('.popup__illustration')
const popupPhoto = new PopupWithImage(popupPhotoSelector, popupPhotoImg, popupPhotoSignature)
popupPhoto.setEventListeners()
const footerOpenPopuBtn = document.querySelector('.footer__title')
footerOpenPopuBtn.addEventListener('click', () => {
    formValidator.resetErrors()
    popupAplication.open()
})
document.querySelector(".popup_type_congratulation_button").addEventListener('click', () => {
    congratulationPopup.close();
})
document.querySelector(".popup_type_error_button").addEventListener('click', () => {
    errorPopup.close();
})