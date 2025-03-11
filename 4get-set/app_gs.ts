class User39 {
    private _login2: string = ''; // Приватное поле, начальное значение пустое
    password: string;
    createdAt2: Date;

    constructor() {
        this.createdAt2 = new Date(); // Устанавливаем дату создания объекта
    }

    set login2(l: string | number) {
        this._login2 = 'user-' + l; // Используем входное значение l
        this.createdAt2 = new Date(); // Запоминаем дату изменения
    }

    get login2() {
        return this._login2; // Возвращаем сохранённое значение
    }

    async getPassword(p: string): Promise<string> {
        return `Hashed password for ${p}`; // Добавили возвращаемое значение
    }
}

const user39 = new User39();
user39.login2 = 'myLogin'; // Вызываем setter
console.log(user39); // Выводит объект user39 с обновлёнными данными
console.log(user39.login2); // Вызываем getter и получаем "user-myLogin"























class Person {
    private _name: string;  // приватное свойство

    // Геттер для получения значения _name
    get name(): string {
        return this._name;
    }

    // Сеттер для установки значения _name
    set name(newName: string) {
        if (newName.length > 3) {  // Проверка длины имени
            this._name = newName;
        } else {
            console.log('Имя должно быть длиной более 3 символов.');
        }
    }

    constructor(name: string) {
        this._name = name;
    }
}

const person = new Person('Alice');
console.log(person.name);  // Вызывается геттер, выводит 'Alice'

person.name = 'Bo';  // Вызывается сеттер, имя не изменится, так как оно слишком короткое
console.log(person.name);  // Выводит 'Alice'

person.name = 'Bob';  // Имя успешно изменится
console.log(person.name);  // Выводит 'Bob'



//Пример с вычислением
class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Геттер для вычисления площади
    get area(): number {
        return this._width * this._height;
    }

    // Сеттер для установки ширины
    set width(newWidth: number) {
        if (newWidth <= 0) {
            console.log('Ширина должна быть положительным числом');
        } else {
            this._width = newWidth;
        }
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);  // 50 (вычисление площади через геттер)

rectangle.width = 20;  // Установка новой ширины через сеттер
console.log(rectangle.area);  // 200 (новая площадь с учетом изменения ширины)
