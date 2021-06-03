import { Popup } from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popup, popupPhotoImg, photoSignature) {
        super(popup);
        this.popupPhotoImg = popupPhotoImg;
        this.photoSignature = photoSignature;
    }
    open(e) {
        this.popupPhotoImg.src = e.target.src;
        this.popupPhotoImg.alt = e.target.alt;
        this.photoSignature.textContent = e.target.alt;
        super.open();
    }
}