"use strict";
// Создаем переменные, которые могут принимать только ключи из User
let key1 = "id"; // ✅ Верно, так как "id" есть в User
let key2 = "name"; // ✅ Верно, так как "name" есть в User
let key3 = "age"; // ✅ Верно, так как "age" есть в User
// let key4: UserKeys = "email"; // ❌ Ошибка! "email" нет в User
// Функция, которая принимает объект и его ключ, и возвращает значение этого ключа
function getProperty(obj, key) {
    return obj[key]; // Возвращаем значение свойства объекта
}
// Создаем объект user
const user68 = { id: 1, name: "Вася", age: 30 };
// Вызываем getProperty для получения значений по ключам
const userName = getProperty(user68, "name"); // ✅ Вернет "Вася"
const userAge = getProperty(user68, "age"); // ✅ Вернет 30
// Пример использования UserMap
const userData = {
    id: "123", // 🔄 Число преобразуется в строку
    name: "Петя",
    age: "30" // 🔄 Число преобразуется в строку
};
