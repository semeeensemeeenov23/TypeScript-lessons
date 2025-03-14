// Создаем класс продукта
class Product {
    constructor(
        public id: number, // Уникальный идентификатор товара
        public title: string, // Название товара
        public price: number // Цена товара
    ) {}
}

// Создаем базовый класс доставки
class Delivery {
    constructor(
        public date: Date // Дата доставки
    ) {}
}

// Класс для доставки на дом, расширяет базовый класс Delivery
class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date); // Вызываем конструктор родительского класса
    }
}

// Класс для самовывоза, расширяет базовый класс Delivery
class ShopDelivery extends Delivery {
    constructor(public shopId: number) { // ID магазина, откуда самовывоз
        super(new Date()); // Автоматически устанавливаем текущую дату как дату самовывоза
    }
}

// Определяем объединенный тип, который может быть либо HomeDelivery, либо ShopDelivery
type DeliveryOptions = HomeDelivery | ShopDelivery;

// Класс корзины товаров
class Cart {
    private product: Product[] = []; // Массив товаров в корзине (приватное свойство)
    private delivery: DeliveryOptions; // Объект доставки (приватное свойство)

    // Метод добавления товара в корзину
    public addProduct(product: Product): void {
        this.product.push(product);
    }

    // Метод удаления товара из корзины по ID
    public deleteProduct(productId: number): void {
        this.product = this.product.filter((p: Product) => p.id !== productId);
    }

    // Метод для подсчета общей суммы товаров в корзине
    public getSum(): number {
        return this.product
            .map((p: Product) => p.price) // Получаем массив цен товаров
            .reduce((p1: number, p2: number) => p1 + p2, 0); // Складываем все цены
    }

    // Метод установки способа доставки
    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }

    // Метод оформления заказа
    public checkOut() {
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
