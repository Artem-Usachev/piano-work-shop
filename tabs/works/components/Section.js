export class Section {
    constructor({ items, renderer }, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        this.containerElement = document.querySelector(containerSelector);
    }

    render() {
        this.items.forEach((element) => this.renderer({ name: element.name, link: element.link }, '.work'));
    }
    addItem(element) {
        this.containerElement.prepend(element);
    }
}