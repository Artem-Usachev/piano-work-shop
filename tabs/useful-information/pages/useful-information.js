import { Menu } from '../../../components/Menu.js';
import { PopupWithForm } from '../../../components/PopupWithForm.js';
import { PopupWithImage } from '../../../components/PopupWithImage.js';


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
    clickEvent: () => popupAplication.open()

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
footerOpenPopuBtn.addEventListener('click', () =>
    popupAplication.open()
)