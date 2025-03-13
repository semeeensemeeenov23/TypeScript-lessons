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


//выбор между наследованием (extends) и композицией
class Payment43 {
    data: Date;
}

class UserWithPayment extends Payment43 {
    name: string
}

class UserWithPayment2 {
    user: User;
    payment43: Payment43;

    constructor(user: User, payment43: Payment43) {
        this.payment43 = payment43;
        this.user = user
    }
}
// Критерий	                                 Наследование (extends)	             Композиция (has-a)
// Гибкость	                              ❌ Жёстко связано с родителем	    ✅ Легко заменять и расширять
// Простота	                              ✅ Меньше кода	                    ❌ Больше кода
// Использование нескольких классов	      ❌ Только один родительский класс	✅ Можно комбинировать разные классы
// Тестируемость	                      ❌ Труднее тестировать	            ✅ Легче заменять зависимости
// Принцип единственной ответственности	  ❌ Может смешивать роли	        ✅ Чёткое разделение
// 📌 Итого:

// Используйте extends, если UserWithPayment – это просто более специализированный Payment43.
// Используйте композицию, если UserWithPayment2 — это отдельная сущность, работающая с User и Payment43 независимо.

// 💡 В большинстве случаев композиция (has-a) – лучший вариант. Она даёт больше гибкости, 
// позволяет легко менять код и не создаёт ненужных зависимостей.