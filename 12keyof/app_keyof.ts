// Определяем интерфейс User68 с тремя полями
interface User68 {
    id: number;  // Уникальный идентификатор пользователя
    name: string; // Имя пользователя
    age: number;  // Возраст пользователя
}

// Используем `keyof` для получения всех ключей User
type UserKeys = keyof User68; // 'id' | 'name' | 'age'

// Создаем переменные, которые могут принимать только ключи из User
let key1: UserKeys = "id";   // ✅ Верно, так как "id" есть в User
let key2: UserKeys = "name"; // ✅ Верно, так как "name" есть в User
let key3: UserKeys = "age";  // ✅ Верно, так как "age" есть в User
// let key4: UserKeys = "email"; // ❌ Ошибка! "email" нет в User

// Функция, которая принимает объект и его ключ, и возвращает значение этого ключа
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]; // Возвращаем значение свойства объекта
}

// Создаем объект user
const user68: User68 = { id: 1, name: "Вася", age: 30 };

// Вызываем getProperty для получения значений по ключам
const userName = getProperty(user68, "name"); // ✅ Вернет "Вася"
const userAge = getProperty(user68, "age");   // ✅ Вернет 30
// const userEmail = getProperty(user, "email"); // ❌ Ошибка! "email" нет в User

// Создаем новый тип UserMap, где все свойства User68 превращаются в строку
type UserMap = {
    [K in keyof User68]: string; // Перебираем ключи User68 и задаем им значение string
};

// Пример использования UserMap
const userData: UserMap = {
    id: "123",  // 🔄 Число преобразуется в строку
    name: "Петя",
    age: "30"   // 🔄 Число преобразуется в строку
};
