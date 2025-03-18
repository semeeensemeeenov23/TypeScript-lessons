const num: Array<number> = [1, 2, 3];

async function test2() {
    const a = await new Promise<Number>((resolve, reject) => {
        resolve(1)
    })
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}

// Универсальная (generic) функция, которая принимает данные любого типа <T>
// и возвращает строку (string) или undefined, если данные невозможно преобразовать.
function toString<T>(data: T): string | undefined {
    
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

console.log(toString<string>('sdsf0'));
// Ожидаемый результат: "sdsf0" (строка остается строкой)

console.log(toString(['a', 'b']));
// Ожидаемый результат: "a,b" (массив преобразуется в строку через .toString())

console.log(toString({ a: 1 }));
// Ожидаемый результат: '{"a":1}' (объект сериализуется в JSON-строку)

console.log(toString(() => console.log("Привет")));
// Ожидаемый результат: "function () => console.log("Привет")" (функция преобразуется в строку)




// Исходный массив данных с объектами, у которых есть id и name (определяет структуру объекта)
const data = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 3, name: 'Надя' }
];

// Определяем интерфейс, который гарантирует наличие поля id типа number
interface ID2 {
    id: number;
}

// Обобщенная (generic) функция сортировки
function sort<T extends ID2>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => { // Используем встроенный метод sort()
        switch (type) {
            case 'asc':  // Если выбрана сортировка по возрастанию
                return a.id - b.id; // Объект с меньшим id становится раньше
            case 'desc': // Если выбрана сортировка по убыванию
                return b.id - a.id; // Объект с большим id становится раньше
        }
    });
}

// Вызываем функцию сортировки с параметром 'desc' (по убыванию id)
console.log(sort(data, 'desc'));
// Ожидаемый результат:
// [
//     { id: 3, name: 'Надя' },
//     { id: 2, name: 'Петя' },
//     { id: 1, name: 'Вася' }
// ]

// Вызываем функцию сортировки без второго аргумента (по умолчанию 'asc')
console.log(sort(data));
// Ожидаемый результат:
// [
//     { id: 1, name: 'Вася' },
//     { id: 2, name: 'Петя' },
//     { id: 3, name: 'Надя' }
// ]
