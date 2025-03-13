"use strict";
// Создаём класс Payment41
class Payment41 {
    // Конструктор принимает id и присваивает его свойству объекта
    constructor(id) {
        this.status = 'new'; // Статус платежа по умолчанию — 'new'
        this.id = id;
    }
    // Метод для изменения статуса платежа на 'paid'
    pay() {
        this.status = 'paid';
    }
}
// Создаём подкласс PersistedPayment, который наследуется от Payment41
class PersistedPayment extends Payment41 {
    // Конструктор класса
    constructor() {
        const id = Math.random(); // Генерируем случайный id
        super(id); // Вызываем конструктор родительского класса Payment41
    }
    // Метод для сохранения платежа в базу данных
    save() {
        // Сохраняем платеж в базу данных
    }
    // Переопределяем метод pay, добавляя функционал
    pay(date) {
        super.pay(); // Вызываем родительский метод pay(), который меняет статус на 'paid'
        // Если передана дата, сохраняем её в paidAt
        if (date) {
            this.paidAt = date;
        }
    }
}
// Пример использования классов
const payment41 = new PersistedPayment(); // Создаём новый объект
console.log(payment41.status); // Выведет 'new'
payment41.pay(new Date()); // Меняем статус на 'paid' и сохраняем дату оплаты
console.log(payment41.status); // Выведет 'paid'
console.log(payment41.paidAt); // Выведет текущую дату
