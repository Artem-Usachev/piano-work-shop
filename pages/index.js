import { Menu } from "../components/Menu.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Popup } from "../components/Popup.js";
import { FormValidator } from "../components/FormValidator.js";

// preload
window.onload = function() {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function() {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 500);
};

// submit
const congratulationPopup = new Popup(
    document.querySelector(".popup_type_congratulation")
);
congratulationPopup.setEventListeners();
const errorPopup = new Popup(document.querySelector(".popup_type_error"));
errorPopup.setEventListeners();
// validator

const formValidationPopupForm = {
    formSelector: ".popup__content",
    inputSelector: ".popup__text",
    submitButton: "popup__button_type_submit",
    inputList: ".popup__text",
    formPopup: ".popup__form",
    activeButtonClass: "popup__button_condition_active",
    errorClass: "popup__error",
    invisibleClass: "invisible",
    openClass: "open",
};
const formValidator = new FormValidator(formValidationPopupForm);
formValidator.enableValidation();
// scroll page
const btnScrollDown = document.querySelector(".arrow-down");
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

btnScrollDown.addEventListener("click", scrollDown);

// work-slider
const work_cards = document.querySelector(".work__cards");
const arrow_left = document.querySelector(".arrow_posishion_left");
const arrow_right = document.querySelector(".arrow_posishion_right");
const work_card = document.querySelector(".work__card");
let i = 0;

function sliderLeft() {
    if (i < 0) {
        i += 100;
        work_cards.style.transform = `translateX(${i}%)`;
    }
    if (i === 0) {
        i = -400;
    }
}

const sliderInterval = setInterval(sliderRight, 8000);
sliderInterval;

function sliderRight() {
    if (i > -400) {
        i -= 100;
        work_cards.style.transform = `translateX(${i}%)`;
    }
    if (i === -400) {
        i = 100;
    }
}

arrow_left.addEventListener("click", () => {
    clearInterval(sliderInterval);
    sliderLeft();
});
arrow_right.addEventListener("click", () => {
    clearInterval(sliderInterval);
    sliderRight();
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header__bar");
    if (window.pageYOffset > 0) {
        header.style.background = `rgba(49, 43, 43, ${window.pageYOffset / 800})`;
    } else {
        header.style.background = "rgba(0, 0, 0, 0)";
    }
});
const popupAplicationSelector = document.querySelector(".popup-application");
const popupAplication = new PopupWithForm({ popup: popupAplicationSelector });
popupAplication.setEventListeners();
const menuSelector = document.querySelector(".menu");
const menuVisible = new Menu({
    selector: menuSelector,
    clickEvent: () => {
        popupAplication.open();
        formValidator.resetErrors();
    },
});
const openMenuBtn = document.querySelector(".header__nav");
openMenuBtn.addEventListener("click", () => menuVisible.open());
menuVisible.setEventListeners();
const popupPhotoSelector = document.querySelector(".popup_type_photo");
const popupPhotoSignature = document.querySelector(".popup__signature");
const popupPhotoImg = document.querySelector(".popup__illustration");
const popupPhoto = new PopupWithImage(
    popupPhotoSelector,
    popupPhotoImg,
    popupPhotoSignature
);
popupPhoto.setEventListeners();
const workImg = document.querySelectorAll(".work__illustrasion");
workImg.forEach((img) => {
    img.addEventListener("click", (e) => {
        popupPhoto.open(e);
    });
});
const footerOpenPopuBtn = document.querySelector(".footer__title");
footerOpenPopuBtn.addEventListener("click", () => {
    formValidator.resetErrors();
    popupAplication.open();
});
document
    .querySelector(".popup_type_congratulation_button")
    .addEventListener("click", () => {
        congratulationPopup.close();
    });
document
    .querySelector(".popup_type_error_button")
    .addEventListener("click", () => {
        errorPopup.close();
    });