//Создание классов //Конструктор 
class User35 {
    name: string;
    age: number

    constructor()
    constructor(name: string)
    constructor(age: number)
    constructor(name: string, age: number)
    constructor(ageOrName?: string | number, age?: string | number) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user35 = new User35('Вася');
const user352 = new User35();
const user353 = new User35(33)
const user354 = new User35('Вася', 33)
console.log(user35)
console.log(user352)
console.log(user353)
console.log(user354)




class Admin {
    role: number;
}
const admin = new Admin();
admin.role = 1;

