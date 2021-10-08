class Card {
    constructor(data, template, openPhotoFunction) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this.openPhotoFunction = openPhotoFunction;
        this.placeTemplate = document.querySelector(".work-template").content;
    }

    _getTemplate() {
        const cardElement = this.placeTemplate
            .querySelector(this._template)
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        const cardIllustration = this._card.querySelector(".work__illustration");
        cardIllustration.addEventListener("click", this.openPhotoFunction);
    }

    generateCard() {
        this._card = this._getTemplate();
        const cardIllustration = this._card.querySelector(".work__illustration");
        const cardTitle = this._card.querySelector(".work__title");
        cardIllustration.src = this._link;
        cardIllustration.alt = this._name;
        cardTitle.textContent = this._name;
        this._setEventListeners();
        return this._card;
    }
}
export { Card };