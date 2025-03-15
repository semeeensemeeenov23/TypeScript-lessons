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
const num = [1, 2, 3];
function test2() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
const check = {
    drive: true,
    kpp: false
};
// Универсальная (generic) функция, которая принимает данные любого типа <T>
// и возвращает строку (string) или undefined, если данные невозможно преобразовать.
function toString(data) {
    // Если data — массив, преобразуем его в строку с помощью метода .toString()
    if (Array.isArray(data)) {
        return data.toString(); // Пример: ['a', 'b'] -> "a,b"
    }
    // Используем switch-case для обработки различных типов данных
    switch (typeof data) {
        case 'string':
            // Если data уже строка, просто возвращаем его
            return data;
        case "number":
        case "bigint":
        case "boolean":
        case "symbol":
        case "undefined":
        case "object":
            // Для объектов, чисел, булевых значений и т. д. используем JSON.stringify()
            return JSON.stringify(data);
        case "function":
            // Функции нельзя преобразовать в JSON, но у них есть метод .toString(),
            // который вернет исходный код функции в виде строки
            return data.toString();
    }
}
// Примеры вызова функции:
console.log(toString(3));
// Ожидаемый результат: "3" (число преобразуется в строку)
console.log(toString('sdsf0'));
// Ожидаемый результат: "sdsf0" (строка остается строкой)
console.log(toString(['a', 'b']));
// Ожидаемый результат: "a,b" (массив преобразуется в строку через .toString())
console.log(toString({ a: 1 }));
// Ожидаемый результат: '{"a":1}' (объект сериализуется в JSON-строку)
console.log(toString(() => console.log("Привет")));
// Ожидаемый результат: "function () => console.log("Привет")" (функция преобразуется в строку)
