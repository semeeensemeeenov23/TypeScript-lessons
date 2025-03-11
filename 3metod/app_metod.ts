enum PaymentStatus {
    Holded,      // 0 - Задержан (ожидание)
    Processed,   // 1 - Обработан (завершен)
    Reversed     // 2 - Отменен
}

// Поля id, status, createdAt, updatedAt определяют структуру объекта платежа.
class Payment {
    id: number;            // Уникальный ID платежа
    status: PaymentStatus; // Текущий статус платежа
    createdAt: Date;       // Дата создания платежа
    updatedAt: Date;       // Дата последнего обновления

    // Когда создаётся объект Payment, он получает:
    // ID (id),
    // Дату создания (createdAt),
    // Начальный статус (Holded, то есть 0).
    constructor(id: number) {
        this.id = id;                         // Устанавливаем ID
        this.createdAt = new Date();          // Записываем текущую дату
        this.status = PaymentStatus.Holded;   // Статус по умолчанию — "Задержан"
    }

    // Метод вычисляет, сколько миллисекунд прошло с момента создания платежа.
    // new Date().getTime() — текущее время.
    // this.createdAt.getTime() — время создания.
    // Разница между этими значениями — время жизни платежа.
    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    // Этот метод отменяет платеж, но только если он ещё не обработан (Processed).
    // Если платеж уже Processed, выбрасывается ошибка.
    // Иначе статус меняется на Reversed, и обновляется updatedAt.
    unholdPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date()
    }       
}

const payment = new Payment(1); // Создаем платеж с ID 1
payment.unholdPayment();        // Отменяем платеж
console.log(payment);           // Выводим объект в консоль
const time = payment.getPaymentLifeTime(); // Считаем время жизни платежа
console.log(time);              // Выводим время жизни

// 📌 Итог
// Этот код моделирует процесс работы с платежами: ✅ enum используется для управления статусами.
// ✅ class содержит информацию о платеже.
// ✅ Методы позволяют отслеживать время жизни платежа и изменять его статус.

// 🔥 Такой подход используется в реальных системах (например, в банках или платёжных сервисах) для обработки платежей! 🚀




class User38 {
    skills: string[]; //(массив строк для хранения навыков).

    addSkill(skil: string): void; //добавляет один навык.
    addSkill(skills: string[]): void; //добавляет несколько навыков.
    addSkill(skiiOrSkills: string | string[]): void {
        if (typeof skiiOrSkills === 'string') {
            this.skills.push(skiiOrSkills) //Если передано одно значение (string)
        } else {
            this.skills = this.skills.concat(skiiOrSkills);; //Если передан массив (string[])
        }
    }
}

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    if (typeof distance === 'number') {
        return 1; // Если число → возвращает 1 (нарушает перегрузку)
    } else {
        return ''; // Если строка → возвращает пустую строку
    }
};

run('1')
// 📌 Итог
// 1️⃣ Класс User38 использует перегрузку метода addSkill для добавления одного навыка или массива навыков.
// 2️⃣ Есть ошибка в this.skills.concat(skiiOrSkills) — нужно this.skills = ....
// 3️⃣ Функция run использует перегрузку и корректно возвращает число или строку.

// 🔥 Перегрузка полезна, когда один метод должен работать с разными типами данных! 🚀













// Ключевое слово	Описание
// enum	            Перечисление фиксированных значений
// class	        Шаблон для создания объектов
// constructor	    Метод, который вызывается при создании объекта
// function	        Функция, выполняющая код и возвращающая значение
// method	        Функция внутри класса (работает с this)
// interface	    Описание структуры объекта
// type             Определение типа данных
// extends	        аследование свойств и методов