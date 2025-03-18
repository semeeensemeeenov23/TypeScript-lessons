"use strict";
// Базовый класс Animal, от которого будут наследоваться другие классы
class Animal {
    constructor(name) {
        this.name = name;
    }
}
// Mixin-класс, который добавляет возможность летать
class CanFly {
    fly() {
        console.log('Я умею летать!');
    }
}
// Mixin-класс, который добавляет возможность плавать
class CanSwim {
    swim() {
        console.log('Я умею плавать!');
    }
}
// Функция для применения mixins
// Эта функция копирует методы из mixin-классов в целевой класс
function applyMixins(targetClass, baseClasses) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            targetClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
// Класс Bird (Птица), наследуется от Animal и получает возможность летать через mixin
class Bird extends Animal {
}
applyMixins(Bird, [CanFly]); // Применяем Mixin "CanFly" к классу Bird
// Класс Duck (Утка), наследуется от Animal и получает возможность летать и плавать через mixin
class Duck extends Animal {
}
applyMixins(Duck, [CanFly, CanSwim]); // Применяем Mixin "CanF
