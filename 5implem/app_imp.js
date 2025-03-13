"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Реализуем интерфейс ILogger в классе Logger
class Logger {
    // Метод log просто выводит аргументы в консоль
    log(...arg) {
        console.log(...arg);
    }
    // Метод error делает асинхронную обработку ошибки
    error(...arg) {
        return __awaiter(this, void 0, void 0, function* () {
            // ИСПРАВЛЕНО: Ошибка была в неправильном имени переменной (должно быть arg, а не arr)
            console.log(...arg);
        });
    }
}
// Класс User40 реализует два интерфейса: IPayable и IDeletable
class User40 {
    // Реализация метода pay, который требуется по интерфейсу IPayable
    pay(paymentId) {
        console.log(`Оплата проведена, ID: ${paymentId}`);
    }
    // Реализация метода delete, который требуется по интерфейсу IDeletable
    delete() {
        console.log("Пользователь удалён");
    }
}
// Создаём объект Logger и используем его методы
const logger = new Logger();
logger.log("Это лог"); // Выведет: "Это лог"
logger.error("Ошибка!"); // Выведет: "Ошибка!"
// Создаём пользователя
const user40 = new User40();
user40.pay(12345); // Выведет: "Оплата проведена, ID: 12345"
user40.delete(); // Выведет: "Пользователь удалён"
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Гав-гав!");
    }
}
const myDog = new Dog("Бобик");
console.log(myDog.name); // Бобик
myDog.makeSound(); // Гав-гав!
