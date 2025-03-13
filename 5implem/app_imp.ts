// Определяем интерфейс ILogger, который задаёт структуру логирования
interface ILogger {
    log(...arg: any[]): void; // Метод log может принимать любое количество аргументов
    error(...arg: any[]): void; // Метод error также принимает любое количество аргументов
}

// Реализуем интерфейс ILogger в классе Logger
class Logger implements ILogger {
    // Метод log просто выводит аргументы в консоль
    log(...arg: any[]): void {
        console.log(...arg);
    }

    // Метод error делает асинхронную обработку ошибки
    async error(...arg: any[]): Promise<void> {
        // ИСПРАВЛЕНО: Ошибка была в неправильном имени переменной (должно быть arg, а не arr)
        console.log(...arg);
    }
}

// Интерфейс для объектов, которые можно оплатить
interface IPayable {
    pay(paymentId: number): void; // Метод для оплаты
    price?: number; // Необязательное поле цены
}

// Интерфейс для объектов, которые можно удалить
interface IDeletable {
    delete(): void; // Метод для удаления
}

// Класс User40 реализует два интерфейса: IPayable и IDeletable
class User40 implements IPayable, IDeletable {
    // Реализация метода pay, который требуется по интерфейсу IPayable
    pay(paymentId: number): void {
        console.log(`Оплата проведена, ID: ${paymentId}`);
    }

    // Реализация метода delete, который требуется по интерфейсу IDeletable
    delete(): void {
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


















interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Гав-гав!");
    }
}

const myDog = new Dog("Бобик");
console.log(myDog.name); // Бобик
myDog.makeSound();       // Гав-гав!
