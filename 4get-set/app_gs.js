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
class User39 {
    constructor() {
        this._login2 = ''; // Приватное поле, начальное значение пустое
        this.createdAt2 = new Date(); // Устанавливаем дату создания объекта
    }
    set login2(l) {
        this._login2 = 'user-' + l; // Используем входное значение l
        this.createdAt2 = new Date(); // Запоминаем дату изменения
    }
    get login2() {
        return this._login2; // Возвращаем сохранённое значение
    }
    getPassword(p) {
        return __awaiter(this, void 0, void 0, function* () {
            return `Hashed password for ${p}`; // Добавили возвращаемое значение
        });
    }
}
const user39 = new User39();
user39.login2 = 'myLogin'; // Вызываем setter
console.log(user39); // Выводит объект user39 с обновлёнными данными
console.log(user39.login2); // Вызываем getter и получаем "user-myLogin"
class Person {
    // Геттер для получения значения _name
    get name() {
        return this._name;
    }
    // Сеттер для установки значения _name
    set name(newName) {
        if (newName.length > 3) { // Проверка длины имени
            this._name = newName;
        }
        else {
            console.log('Имя должно быть длиной более 3 символов.');
        }
    }
    constructor(name) {
        this._name = name;
    }
}
const person = new Person('Alice');
console.log(person.name); // Вызывается геттер, выводит 'Alice'
person.name = 'Bo'; // Вызывается сеттер, имя не изменится, так как оно слишком короткое
console.log(person.name); // Выводит 'Alice'
person.name = 'Bob'; // Имя успешно изменится
console.log(person.name); // Выводит 'Bob'
//Пример с вычислением
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    // Геттер для вычисления площади
    get area() {
        return this._width * this._height;
    }
    // Сеттер для установки ширины
    set width(newWidth) {
        if (newWidth <= 0) {
            console.log('Ширина должна быть положительным числом');
        }
        else {
            this._width = newWidth;
        }
    }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area); // 50 (вычисление площади через геттер)
rectangle.width = 20; // Установка новой ширины через сеттер
console.log(rectangle.area); // 200 (новая площадь с учетом изменения ширины)
