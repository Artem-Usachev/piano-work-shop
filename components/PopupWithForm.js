import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor({ popup }) {
        super(popup);
        this.submitForm = this.popup.querySelector('.popup__content')
        this.submitButton = this.submitForm.querySelector('.popup__button')

    }
    _reset() {
        const formElement = this.popup.querySelector(`form`);
        formElement.reset();
    }

    renderLoading(loading) {
        if (loading) {
            this.submitButton.textContent = 'Сохранение...';
        } else {
            this.submitButton.textContent = 'Сохранено!';
        }
    };
    setEventListeners() {
        super.setEventListeners();
        this.submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.close()
        });
    }
    close() {
        this._reset();
        super.close();
    }
}