'use strict';

class ProductList {
    constructor(container = '.products') {
        this._container = document.querySelector(container);
        this._goods = [];   //!!список товаров
        this._allProducts = []; //!!каталог эксземпляров классов товаров - актуальное состояние текущего списка товаров

        this._fetchGoods();
        this._render();
        
    }

    sum() {
        return this._allProducts.reduce((sum, { price }) => sum + price, 0);
      }  

//!!метод, который обращался бы к серверу и получал данные
    _fetchGoods() {
        this._goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }
//!!метод для перебора массива товаров и возвращения кусочка разметки для каждого товара
    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);
            this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
   
}
class BasketItem {
    // По сути, нам нужно отображать в корзине те же самые элементы, что и в списке
    constructor(title, price, img, link) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.link = link; // Вероятно, ссылка на страницу товара
    }
    render() {

    }
}
class Basket {
    constructor() {
        // В классе корзины массив с добавленными товарами
        this.addGoods = [];
        this.deletedGoods = []; // Можно заморочится и добавить товары, которые были удалены из корзины (их можно быстро вернуть в список - убираем боль/проблему поиска, если удалено случайно/пользователь передумал)
    }
    // Добавление товара в корзину (привязываем на нажатие кнопки)
    addToBasket() {}

    // Удаление товара из корзины (привязываем на нажатие кнопки)
    deleteFromBasket() {}

    // Считаем стоимость и количество товаров в корзине
    calcBasket() {}

    // Метод, который определяет, добавлены ли в корзину какие-либо товары и при их наличии активирует кнопку "Оформить заказ"
    isOrder() {}

    // Рендер динамического содержимого корзины
    render() {}

    // Метод открывания корзины
    openBasket() {}
}

new ProductList();

