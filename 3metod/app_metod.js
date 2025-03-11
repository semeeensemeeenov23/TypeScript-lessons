"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed"; // 2 - Отменен
})(PaymentStatus || (PaymentStatus = {}));
// Поля id, status, createdAt, updatedAt определяют структуру объекта платежа.
class Payment {
    // Когда создаётся объект Payment, он получает:
    // ID (id),
    // Дату создания (createdAt),
    // Начальный статус (Holded, то есть 0).
    constructor(id) {
        this.id = id; // Устанавливаем ID
        this.createdAt = new Date(); // Записываем текущую дату
        this.status = PaymentStatus.Holded; // Статус по умолчанию — "Задержан"
    }
    // Метод вычисляет, сколько миллисекунд прошло с момента создания платежа.
    // new Date().getTime() — текущее время.
    // this.createdAt.getTime() — время создания.
    // Разница между этими значениями — время жизни платежа.
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    // Этот метод отменяет платеж, но только если он ещё не обработан (Processed).
    // Если платеж уже Processed, выбрасывается ошибка.
    // Иначе статус меняется на Reversed, и обновляется updatedAt.
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1); // Создаем платеж с ID 1
payment.unholdPayment(); // Отменяем платеж
console.log(payment); // Выводим объект в консоль
const time = payment.getPaymentLifeTime(); // Считаем время жизни платежа
console.log(time); // Выводим время жизни
// 📌 Итог
// Этот код моделирует процесс работы с платежами: ✅ enum используется для управления статусами.
// ✅ class содержит информацию о платеже.
// ✅ Методы позволяют отслеживать время жизни платежа и изменять его статус.
// 🔥 Такой подход используется в реальных системах (например, в банках или платёжных сервисах) для обработки платежей! 🚀
class User38 {
    addSkill(skiiOrSkills) {
        if (typeof skiiOrSkills === 'string') {
            this.skills.push(skiiOrSkills); //Если передано одно значение (string)
        }
        else {
            this.skills = this.skills.concat(skiiOrSkills);
            ; //Если передан массив (string[])
        }
    }
}
function run(distance) {
    if (typeof distance === 'number') {
        return 1; // Если число → возвращает 1 (нарушает перегрузку)
    }
    else {
        return ''; // Если строка → возвращает пустую строку
    }
}
;
run('1');
// 📌 Итог
// 1️⃣ Класс User38 использует перегрузку метода addSkill для добавления одного навыка или массива навыков.
// 2️⃣ Есть ошибка в this.skills.concat(skiiOrSkills) — нужно this.skills = ....
// 3️⃣ Функция run использует перегрузку и корректно возвращает число или строку.
// 🔥 Перегрузка полезна, когда один метод должен работать с разными типами данных! 🚀
class Calculator {
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b; // если оба аргумента - числа, возвращаем их сумму
        }
        else if (typeof a === 'string' && typeof b === 'string') {
            return a + ' ' + b; // если оба аргумента - строки, возвращаем их конкатенацию
        }
        throw new Error('Invalid types'); // если аргументы не соответствуют типам, выбрасываем ошибку
    }
}
const calc = new Calculator();
console.log(calc.add(10, 20)); // 30 (сложение чисел)
console.log(calc.add('Hello', 'World')); // Hello World (конкатенация строк)
// Ключевое слово	Описание
// enum	            Перечисление фиксированных значений
// class	        Шаблон для создания объектов
// constructor	    Метод, который вызывается при создании объекта
// function	        Функция, выполняющая код и возвращающая значение
// method	        Функция внутри класса (работает с this)
// interface	    Описание структуры объекта
// type             Определение типа данных
// extends	        аследование свойств и методов
