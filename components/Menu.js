export class Menu {
    constructor({ selector, clickEvent }) {
        this.selector = selector;
        this.closeBtn = this.selector.querySelector('.menu__exit');
        this.openPopupBtn = this.selector.querySelector('.menu__link-application')
        this.rewindContactsBtn = this.selector.querySelector('.menu__link-type-contacts')
        this.clickEvent = clickEvent;
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this.selector.classList.remove('invisible')
        this.selector.addEventListener('mousedown', this._handleClickClose)
        document.addEventListener('keydown', this._handleEscClose)
    }
    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close();
        }
    }
    _handleClickClose(e) {
        if (e.target.classList.contains('menu')) {
            this.close();
        }
    }
    close() {
        this.selector.classList.add('invisible');
        this.selector.removeEventListener('mousedown', this._handleClickClose)
        document.removeEventListener('keydown', this._handleEscClose)
    }
    setEventListeners() {
        this.rewindContactsBtn.addEventListener('click', () => {
            this.close()
        })
        this.openPopupBtn.addEventListener('click', () => {
            this.clickEvent()
            this.close()
        })
        this.closeBtn.addEventListener('click', this.close.bind(this))
    }
}