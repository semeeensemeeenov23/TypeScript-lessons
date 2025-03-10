//Функция
function getFullName(firstname, surname) {
    return `${firstname}  ${surname}`;
}

//Стрелочная
const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname}  ${surname}`;
}

console.log(getFullName(true, false));



function getFullName12(userEnt):string {
    return `${userEnt.firstname}  ${userEnt.surname}`;
}

const user = {
    firstname: 'Ann', 
    surname: 'Smith',
    city: 'USA',
    age: 23
}

console.log(getFullName12(user));

//enum (перечисление)
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  
  console.log(Status.Success); // 200
  console.log(Status[404]);    // "NotFound"


  //Union
function logId(id: string | number | boolean) {
    console.log(id);
}

logId(1);
logId('lklk');
logId(true);

const arr = ['sdf', 1];

function logId2(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase)
    } else if (typeof id === 'number') {
        console.log(id)
    } else {
        console.log(id)
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err)
    } else {
        console.log(err)
    }
}

function logObject(obj: {a : number} | {b : number}) {
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}

// Literal Types
function fetchWithAuth(url: string, method: 'post' | 'get'){
}
fetchWithAuth('s', 'post');
fetchWithAuth('p', 'get');
fetchWithAuth('l', '1')

let a: '123iii' = '123iii'
a = '124'

//Type Aliases
type User = {
    name: string,
    age: number,
    skills: string[]
}
let user2: User = {
    name: 'asd',
    age: 23,
    skills: ['1', '2']
}

//интерфейсы
interface User3 {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string
}

interface Role {
    roleId: number;
}
interface UserWithRole extends User3, Role {
    createdAT: Date;
}

let user3: UserWithRole = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
    roleId: 1,
    createdAT: new Date(),

    log(id) {
        return 'Hello'
    },
}

interface UserDic {
    [index: number]: User
}

type UserDic2 = {
    [index: number]: User
}

// Types или interfaces
interface User24 {
    name: string
}
interface User24 {
    age: number
}
const user24: User24 = {
    name: 'as',
    age: 33
}

type ID = string | number;
interface IDI {
    ID: string | number
}


//Опциональность
interface User25 {
    login: string;
    password?: string; //? опция не обязательно
}
const user25: User25 = {
    login: "123156",
    //password: "1231" 
}

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}
//одинаковые
function testPass(user: UserPro) {
    const t = user.password ? user.password.type : undefined
    const p = user.password?.type
}

function test(param?: string) {
    const t = param ?? console.log('anu')
}

//Void - функция ничего не возвращает
// Функция, которая просто выводит сообщение в консоль
function logMessage(message: string): void {
    console.log("Сообщение:", message);
}

logMessage("Привет!"); // Выведет: Сообщение: Привет!

//Unknown это специальный более строгий тип, чем any, который говорит:
//"Я не знаю, какой здесь тип, но ты не можешь использовать это значение без явного приведения типа."
//Пример проверки
function processValue(value: unknown) {
    if (typeof value === "string") {
        console.log("Это строка:", value.toUpperCase()); // ✅ Преобразуем в верхний регистр
    } else if (typeof value === "number") {
        console.log("Это число:", value.toFixed(2)); // ✅ Округляем число до 2 знаков
    } else {
        console.log("Неизвестный тип данных");
    }
}

processValue("hello"); // Выведет: Это строка: HELLO
processValue(42.5678); // Выведет: Это число: 42.57
processValue(true); // Выведет: Неизвестный тип данных

// never
type Status2 = "success" | "error";

function processStatus(status: Status2) {
    switch (status) {
        case "success":
            console.log("Успешно!");
            break;
        case "error":
            console.log("Ошибка!");
            break;
        default:
            const _exhaustiveCheck: never = status; // ❌ Ошибка, если появился новый статус!
            throw new Error("Неизвестный статус!");
    }
}

processStatus("success"); // ✅ Ок
processStatus("error"); // ✅ Ок
// processStatus("pending"); // ❌ Ошибка, потому что "pending" не входит в `Status`

type NotAllowed = never; // Переменная с типом `never` не может существовать
let something: NotAllowed; // ❌ Ошибка: Нельзя присвоить значение типу `never`

function emergencyShutdown(reason: string): never {
    throw new Error("АВАРИЙНАЯ ОСТАНОВКА! Причина: " + reason);
}

// 🔥 Если завод перегревается, система аварийно выключается
emergencyShutdown("Перегрев оборудования!"); // ❌ Работа завода остановлена

function callCenter(): never {
    while (true) {
        console.log("Оставайтесь на линии, ваш звонок очень важен для нас...");
    }
}

// ☎️ Этот процесс никогда не завершится сам по себе
callCenter();

//Nul

let aa: null = null;        // Явно указано, что здесь "ничего"
let bb: undefined;          // Переменная создана, но ей не присвоили значение

console.log(aa); // 👉 null
console.log(bb); // 👉 undefined


//Приведение типов
let a31 = 5;
let b31: string = a31.toString()

let c31 = 'sdf';
let d31: number = parseInt(c31) //+c31

interface User31 {
    name31: string;
    email31: string;
    login31: string;
}

const user31: User31 = {
    name31: 'Вася',
    email31: 'vasilii@ya.ru',
    login31: 'vasi'
}

interface Admin {
    name: string;
    role: number;
}

// Type Guard
function loogId(id: string | number) {
    if (typeof id === 'string') {
        console.log(id)
    } else if (typeof id === 'number') {
        console.log(id)
    }
    id
}

function loogId2(id: string | number) {
    if (isString(id)) {
        console.log(id)
    } else if (typeof id === 'number') {
        console.log(id)
    }
    id
}
function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternativ(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function serRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('Пользователь не админ');
    }
}

//video_033 Упражнение typegard

//интерфейс IPayment, который описывает структуру объекта платежа
interface IPayment {
    sum: number;
    from: number;
    to: number;
}

// Перечисление возможных статусов платежа
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

// Интерфейс запроса на платеж
interface IPaymnetReqest extends IPayment {}

// Интерфейс данных успешного ответа (содержит databaseId)
interface IDataSuccess extends IPayment {
    databaseId: number;
}

// Интерфейс данных неуспешного ответа (ошибка)
interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

// Исправленный интерфейс успешного ответа
interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess; // Теперь содержит правильные данные (IDataSuccess)
}

// Интерфейс неуспешного ответа
interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed; // Оставляем IDataFailed, потому что это ошибка
}

// Функция, которая принимает успешный или неуспешный ответ и возвращает число
type f = (res: IResponseSuccess | IResponseFailed) => number;

// Общий тип для ответов
type Res = IResponseSuccess | IResponseFailed;

// Функция Type Guard, которая проверяет, является ли ответ успешным
function isSuccess(res: Res): res is IResponseSuccess {
    if (res.status === PaymentStatus.Success) {
        return true
    };
    return false
}

// Функция, которая получает ID из успешного ответа или выбрасывает ошибку
function getIdFromData(res: Res): number {
    if (isSuccess(res)) { // сокращение кода (res.status === PaymentStatus.Success)
        return res.data.databaseId; // Теперь TypeScript не выдаст ошибку
    } else {
        throw new Error(res.data.errorMessage);
    }
}
