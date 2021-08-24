import { Section } from "../../../works/components/Section.js";
import { Card } from "../../../works/components/Card.js";
import {
    initialCardsKeyboard,
} from "../../../works/components/InitalCard.js";
window.onload = function() {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function() {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 500);
};
import { PopupWithImage } from "../../../works/components/PopupWithImage.js";
const reversCards = initialCardsKeyboard.reverse();
const sectionKeyboard = new Section({ items: reversCards, renderer: (data) => addNewCard(data, sectionKeyboard) },
    '.works_type_keys')
sectionKeyboard.render()

function addNewCard(data, section) {
    const card = new Card(data, '.work', () => handleCardClick(data));
    const cardElement = card.generateCard();
    section.addItem(cardElement)
}

function handleCardClick(data) {
    popupPhoto.open(data);
}
const popupPhotoSelector = document.querySelector(".popup_type_photo");
const popupPhotoSignature = document.querySelector(".popup__signature");
const popupPhotoImg = document.querySelector(".popup__illustration");
const popupPhoto = new PopupWithImage(
    popupPhotoSelector,
    popupPhotoImg,
    popupPhotoSignature
);
popupPhoto.setEventListeners();