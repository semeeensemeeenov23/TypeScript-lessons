"use strict";
// Абстрактный класс Logger50
class Logger50 {
    // Реализованный метод printDate, который выводит дату через метод log
    printDate(date) {
        // Вызываем метод log, чтобы вывести строковое представление даты
        this.log(date.toString());
    }
}
// Класс MyLogger, который наследует от Logger50 и реализует абстрактный метод log
class MyLogger extends Logger50 {
    // Реализация метода log в классе MyLogger
    log(message) {
        // Выводим сообщение в консоль
        console.log(message);
    }
    // Метод logWithDate выводит сообщение с датой
    logWithDate(message) {
        // Сначала выводим текущую дату с помощью метода printDate
        this.printDate(new Date());
        // Затем выводим само сообщение с помощью метода log
        this.log(message);
    }
}
// Создание экземпляра класса MyLogger
const logger50 = new MyLogger();
// Вызов метода logWithDate с сообщением
logger50.logWithDate('Мое сообщение');
// Абстрактный класс
class Shape {
    describe() {
        return "This is a shape."; // Обычный метод, который может быть унаследован без изменений
    }
}
// Дочерний класс Circle, который наследует абстрактный класс Shape
class Circle extends Shape {
    constructor(radius) {
        super(); // Вызов конструктора родительского класса
        this.radius = radius;
    }
    // Реализация абстрактного метода area
    area() {
        return Math.PI * this.radius * this.radius;
    }
    // Реализация абстрактного метода perimeter
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// Дочерний класс Rectangle, который наследует абстрактный класс Shape
class Rectangle50 extends Shape {
    constructor(width, height) {
        super(); // Вызов конструктора родительского класса
        this.width = width;
        this.height = height;
    }
    // Реализация абстрактного метода area
    area() {
        return this.width * this.height;
    }
    // Реализация абстрактного метода perimeter
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
// Создание экземпляров дочерних классов
const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`); // 78.53981633974483
console.log(`Circle perimeter: ${circle.perimeter()}`); // 31.41592653589793
const rectangle50 = new Rectangle50(4, 6);
console.log(`Rectangle50 area: ${rectangle50.area()}`); // 24
console.log(`Rectangle50 perimeter: ${rectangle50.perimeter()}`); // 20
