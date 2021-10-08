import { Popup } from "./Popup.js";
const congratulationPopup = new Popup(document.querySelector('.popup_type_congratulation'))
const errorPopup = new Popup(document.querySelector('.popup_type_error'))
export class PopupWithForm extends Popup {
    constructor({ popup }) {
        super(popup);
        this.submitForm = this.popup.querySelector('.popup__content')
        this.submitButton = this.submitForm.querySelector('.popup__button')

    }
    send(event, php) {
        console.log("Отправка запроса");
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var req = new XMLHttpRequest();
        req.open('POST', php, true);
        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
                let json = JSON.parse(this.response);
                if (json.result == "success") {
                    congratulationPopup.open();
                } else {
                    // Если произошла ошибка
                    errorPopup.open()
                }
                // Если не удалось связаться с php файлом
            } else { alert("Ошибка сервера. Номер: " + req.status); }
        };

        // Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function() { alert("Ошибка отправки запроса"); };
        req.send(new FormData(event.target));
    };
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
        this.submitForm.addEventListener('submit', (event) => {
            this.send(event, '../../../send.php');
            this.close()
        });
    }
    close() {
        this._reset();
        super.close();
    }
}