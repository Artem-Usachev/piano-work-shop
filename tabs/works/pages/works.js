import { Menu } from '../../../components/Menu.js';
import { Card } from '../components/Card.js'
import { PopupWithForm } from '../../../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import {
    initialCardsKeyboard,
    initalCardsPegs,
    initalCardsMechanics,
    initalCardsPainting,
    initalCardsPolishing,
    initalCardsAdjustingMechanics,
    initalCardsRepair,
    initalCardsStringShirt,
    initalCardsTransportation,
    initialCardsCleaning
}
from '../components/InitalCard.js';
// preload
window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}
const reversCards = initialCardsKeyboard.reverse()
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
const workImg = document.querySelectorAll('.work__illustrasion');


function handleCardClick(data) {
    popupPhoto.open(data);
}

function addNewCard(data, section) {
    const card = new Card(data, '.work', () => handleCardClick(data));
    const cardElement = card.generateCard();
    section.addItem(cardElement)
}
const sectionKeyboard = new Section({ items: reversCards, renderer: (data) => addNewCard(data, sectionKeyboard) },
    '.works_type_keys')
sectionKeyboard.render()

const sectionPegs = new Section({ items: initalCardsPegs, renderer: (data) => addNewCard(data, sectionPegs) },
    '.works_type_pegs')
sectionPegs.render()
const sectionMechanics = new Section({ items: initalCardsMechanics, renderer: (data) => addNewCard(data, sectionMechanics) },
    '.works_type_mechanics')
sectionMechanics.render()
const sectionPainting = new Section({ items: initalCardsPainting, renderer: (data) => addNewCard(data, sectionPainting) },
    '.works_type_painting')
sectionPainting.render()
const sectionPolishing = new Section({ items: initalCardsPolishing, renderer: (data) => addNewCard(data, sectionPolishing) },
    '.works_type_polishing')
sectionPolishing.render()
const sectionAdjustingMechanics = new Section({ items: initalCardsAdjustingMechanics, renderer: (data) => addNewCard(data, sectionAdjustingMechanics) },
    '.works_type_adjusting-mechanics')
sectionAdjustingMechanics.render()
const sectionRepair = new Section({ items: initalCardsRepair, renderer: (data) => addNewCard(data, sectionRepair) },
    '.works_type_repair')
sectionRepair.render()
const sectionStringShirt = new Section({ items: initalCardsStringShirt, renderer: (data) => addNewCard(data, sectionStringShirt) },
    '.works_type_string-shirt')
sectionStringShirt.render()
const sectionTransportation = new Section({ items: initalCardsTransportation, renderer: (data) => addNewCard(data, sectionTransportation) },
    '.works_type_transportation')
sectionTransportation.render()
const sectionCleaning = new Section({ items: initialCardsCleaning, renderer: (data) => addNewCard(data, sectionCleaning) },
    '.works_type_cleaning')
sectionCleaning.render()