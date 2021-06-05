import { Menu } from '../components/Menu.js';
import { Popup }
from '../components/Popup.js'
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
// preload
window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}


// scroll page
const btnScrollDown = document.querySelector('.arrow-down');
const windowCoords = document.documentElement.clientHeight;

function scrollDown() {

    (function scroll() {
        if (window.pageYOffset < windowCoords) {
            window.scrollBy(0, 5);
            setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
            window.scrollTo(0, windowCoords);
        }
    })();
}

btnScrollDown.addEventListener('click', scrollDown);

// work-slider
const work_cards = document.querySelector('.work__cards');
const arrow_left = document.querySelector('.arrow_posishion_left');
const arrow_right = document.querySelector('.arrow_posishion_right');
const work_card = document.querySelector('.work__card');
let i = 0;

function sliderLeft() {
    if (i < 0) {
        i += 100;
        work_cards.style.transform = `translateX(${i}%)`;
    }
    if (i === 0) {
        i = -500;
    }
}

const sliderInterval = setInterval(sliderRight, 8000);
sliderInterval


function sliderRight() {
    if (i > -400) {
        i -= 100;
        work_cards.style.transform = `translateX(${i}%)`;
    }
    if (i === -400) {
        i = 100;
    }
}

arrow_left.addEventListener('click', () => {
    clearInterval(sliderInterval)
    sliderLeft()
});
arrow_right.addEventListener('click', () => {
    clearInterval(sliderInterval)
    sliderRight()
});

window.addEventListener('scroll', (e) => {
    const header = document.querySelector('.header__bar');
    if (window.pageYOffset > 0) {
        header.style.background = `rgba(49, 43, 43, ${window.pageYOffset / 800})`;
    } else {
        header.style.background = 'rgba(0, 0, 0, 0)';
    }
})
const popupAplicationSelector = document.querySelector('.popup-application')
const popupAplication = new PopupWithForm({ popup: popupAplicationSelector })
    // popupAplication.setEventListeners()
const menuSelector = document.querySelector('.menu');
const menuVisible = new Menu({
    selector: menuSelector,
    clickEvent: () => popupAplication.open()

})
const openMenuBtn = document.querySelector('.header__nav')
openMenuBtn.addEventListener('click', () => menuVisible.open())
menuVisible.setEventListeners()
const popupRepairSelector = document.querySelector('.popup-repair')
const popupRepair = new Popup(popupRepairSelector)
popupRepair.setEventListeners()
const openPopupRepairBtn = document.querySelector('.card-repair')
openPopupRepairBtn.addEventListener('click', () => popupRepair.open())
const popupSettingsSelector = document.querySelector('.popup-settings')
const popupTransportationSelector = document.querySelector('.popup-transportation')
const popupDiagnosticsSelector = document.querySelector('.popup-diagnostics')
const popupSettings = new Popup(popupSettingsSelector)
const popupTransportation = new Popup(popupTransportationSelector)
const popupDiagnostics = new Popup(popupDiagnosticsSelector)
popupSettings.setEventListeners()
popupTransportation.setEventListeners()
popupDiagnostics.setEventListeners()
const openPopupSettingsBtn = document.querySelector('.card-settings')
const openPopupTransportationBtn = document.querySelector('.card-transportation')
const openPopupDiagnosticsBtn = document.querySelector('.card-diagnostics')
openPopupSettingsBtn.addEventListener('click', () => popupSettings.open())
openPopupTransportationBtn.addEventListener('click', () => popupTransportation.open())
openPopupDiagnosticsBtn.addEventListener('click', () => popupDiagnostics.open())
const popupPhotoSelector = document.querySelector('.popup_type_photo')
const popupPhotoSignature = document.querySelector('.popup__signature')
const popupPhotoImg = document.querySelector('.popup__illustration')
const popupPhoto = new PopupWithImage(popupPhotoSelector, popupPhotoImg, popupPhotoSignature)
popupPhoto.setEventListeners()
const workImg = document.querySelectorAll('.work__illustrasion');
workImg.forEach((img) => {
    img.addEventListener('click', (e) => popupPhoto.open(e))
})
const footerOpenPopuBtn = document.querySelector('.footer__title')
footerOpenPopuBtn.addEventListener('click', () =>
    popupAplication.open()
)