// Определяем тип PaymentStatus41, который может содержать только два значения: 'new' или 'paid'
type PaymentStatus41 = 'new' | 'paid';

// Создаём класс Payment41
class Payment41 {
    id: number; // Уникальный идентификатор платежа
    status: PaymentStatus41 = 'new'; // Статус платежа по умолчанию — 'new'

    // Конструктор принимает id и присваивает его свойству объекта
    constructor(id: number) {
        this.id = id;
    }

    // Метод для изменения статуса платежа на 'paid'
    pay() {
        this.status = 'paid';
    }
}

// Создаём подкласс PersistedPayment, который наследуется от Payment41
class PersistedPayment extends Payment41 {
    databaseId: number; // ID платежа в базе данных
    paidAt: Date; // Дата платежа

    // Конструктор класса
    constructor() {
        const id = Math.random(); // Генерируем случайный id
        super(id); // Вызываем конструктор родительского класса Payment41
    }

    // Метод для сохранения платежа в базу данных
    save() {
        // Сохраняем платеж в базу данных
    }

    // Переопределяем метод pay, добавляя функционал
    override pay(date?: Date) {
        super.pay(); // Вызываем родительский метод pay(), который меняет статус на 'paid'
        
        // Если передана дата, сохраняем её в paidAt
        if (date) {
            this.paidAt = date;
        }
    }
}

// Пример использования классов

const payment41 = new PersistedPayment(); // Создаём новый объект
console.log(payment41.status); // Выведет 'new'

payment41.pay(new Date()); // Меняем статус на 'paid' и сохраняем дату оплаты
console.log(payment41.status); // Выведет 'paid'
console.log(payment41.paidAt); // Выведет текущую дату
