"use strict";
// Создаем класс продукта
class Product {
    constructor(id, // Уникальный идентификатор товара
    title, // Название товара
    price // Цена товара
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
// Создаем базовый класс доставки
class Delivery {
    constructor(date // Дата доставки
    ) {
        this.date = date;
    }
}
// Класс для доставки на дом, расширяет базовый класс Delivery
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date); // Вызываем конструктор родительского класса
        this.address = address;
    }
}
// Класс для самовывоза, расширяет базовый класс Delivery
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date()); // Автоматически устанавливаем текущую дату как дату самовывоза
        this.shopId = shopId;
    }
}
// Класс корзины товаров
class Cart {
    constructor() {
        this.product = []; // Массив товаров в корзине (приватное свойство)
    }
    // Метод добавления товара в корзину
    addProduct(product) {
        this.product.push(product);
    }
    // Метод удаления товара из корзины по ID
    deleteProduct(productId) {
        this.product = this.product.filter((p) => p.id !== productId);
    }
    // Метод для подсчета общей суммы товаров в корзине
    getSum() {
        return this.product
            .map((p) => p.price) // Получаем массив цен товаров
            .reduce((p1, p2) => p1 + p2, 0); // Складываем все цены
    }
    // Метод установки способа доставки
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    // Метод оформления заказа
    checkOut() {
        if (this.product.length === 0) {
            throw new Error('Нет ни одного товара в корзине'); // Ошибка, если корзина пуста
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки'); // Ошибка, если доставка не выбрана
        }
        return { success: true }; // Возвращаем успешное завершение заказа
    }
}
// Создаем экземпляр корзины
const cart = new Cart();
// Добавляем товары в корзину
cart.addProduct(new Product(1, 'Печенье', 10));
cart.addProduct(new Product(2, 'Торт', 30));
cart.addProduct(new Product(3, 'Шоколад', 20));
// Выводим сумму всех товаров в корзине
console.log(cart.getSum()); // 10 + 30 + 20 = 60
// Удаляем товар с ID 1 (Печенье)
cart.deleteProduct(1);
console.log(cart.getSum()); // Теперь сумма: 30 + 20 = 50
// Устанавливаем доставку на дом
cart.setDelivery(new HomeDelivery(new Date(), 'Москва'));
// Оформляем заказ и выводим результат
console.log(cart.checkOut()); // { success: true }
