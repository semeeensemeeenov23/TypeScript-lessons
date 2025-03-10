"use strict";
//Функция
function getFullName(firstname, surname) {
    return `${firstname}  ${surname}`;
}
//Стрелочная
const getFullNameArrow = (firstname, surname) => {
    return `${firstname}  ${surname}`;
};
console.log(getFullName(true, false));
function getFullName12(userEnt) {
    return `${userEnt.firstname}  ${userEnt.surname}`;
}
const user = {
    firstname: 'Ann',
    surname: 'Smith',
    city: 'USA',
    age: 23
};
console.log(getFullName12(user));
//enum (перечисление)
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success); // 200
console.log(Status[404]); // "NotFound"
//Union
function logId(id) {
    console.log(id);
}
logId(1);
logId('lklk');
logId(true);
const arr = ['sdf', 1];
function logId2(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
// Literal Types
function fetchWithAuth(url, method) {
}
fetchWithAuth('s', 'post');
fetchWithAuth('p', 'get');
fetchWithAuth('l', 'post');
let a = '123iii';
let user2 = {
    name: 'asd',
    age: 23,
    skills: ['1', '2']
};
let user3 = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
    roleId: 1,
    createdAT: new Date(),
    log(id) {
        return 'Hello';
    },
};
const user24 = {
    name: 'as',
    age: 33
};
const user25 = {
    login: "123156",
    //password: "1231" 
};
//одинаковые
function testPass(user) {
    var _a;
    const t = user.password ? user.password.type : undefined;
    const p = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : console.log('anu');
}
//Void - функция ничего не возвращает
// Функция, которая просто выводит сообщение в консоль
function logMessage(message) {
    console.log("Сообщение:", message);
}
logMessage("Привет!"); // Выведет: Сообщение: Привет!
//Unknown это специальный более строгий тип, чем any, который говорит:
//"Я не знаю, какой здесь тип, но ты не можешь использовать это значение без явного приведения типа."
//Пример проверки
function processValue(value) {
    if (typeof value === "string") {
        console.log("Это строка:", value.toUpperCase()); // ✅ Преобразуем в верхний регистр
    }
    else if (typeof value === "number") {
        console.log("Это число:", value.toFixed(2)); // ✅ Округляем число до 2 знаков
    }
    else {
        console.log("Неизвестный тип данных");
    }
}
processValue("hello"); // Выведет: Это строка: HELLO
processValue(42.5678); // Выведет: Это число: 42.57
processValue(true); // Выведет: Неизвестный тип данных
function processStatus(status) {
    switch (status) {
        case "success":
            console.log("Успешно!");
            break;
        case "error":
            console.log("Ошибка!");
            break;
        default:
            const _exhaustiveCheck = status; // ❌ Ошибка, если появился новый статус!
            throw new Error("Неизвестный статус!");
    }
}
processStatus("success"); // ✅ Ок
processStatus("error"); // ✅ Ок
let something; // ❌ Ошибка: Нельзя присвоить значение типу `never`
function emergencyShutdown(reason) {
    throw new Error("АВАРИЙНАЯ ОСТАНОВКА! Причина: " + reason);
}
// 🔥 Если завод перегревается, система аварийно выключается
emergencyShutdown("Перегрев оборудования!"); // ❌ Работа завода остановлена
function callCenter() {
    while (true) {
        console.log("Оставайтесь на линии, ваш звонок очень важен для нас...");
    }
}
// ☎️ Этот процесс никогда не завершится сам по себе
callCenter();
//Nul
let aa = null; // Явно указано, что здесь "ничего"
let bb; // Переменная создана, но ей не присвоили значение
console.log(aa); // 👉 null
console.log(bb); // 👉 undefined
//Приведение типов
let a31 = 5;
let b31 = a31.toString();
let c31 = 'sdf';
let d31 = parseInt(c31); //+c31
const user31 = {
    name31: 'Вася',
    email31: 'vasilii@ya.ru',
    login31: 'vasi'
};
// Type Guard
function loogId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    id;
}
function loogId2(id) {
    if (isString(id)) {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    id;
}
function isString(x) {
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternativ(user) {
    return user.role !== undefined;
}
function serRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
// Перечисление возможных статусов платежа
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// Функция Type Guard, которая проверяет, является ли ответ успешным
function isSuccess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    ;
    return false;
}
// Функция, которая получает ID из успешного ответа или выбрасывает ошибку
function getIdFromData(res) {
    if (isSuccess(res)) { // сокращение кода (res.status === PaymentStatus.Success)
        return res.data.databaseId; // Теперь TypeScript не выдаст ошибку
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
