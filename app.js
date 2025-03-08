"use strict";
//Функция
function getFullName(firstname, surname) {
    return `${firstname}  ${surname}`;
}
//Стрелочная
const getFullNameArrow = (firstname, surname) => {
    return `${firstname}  ${surname}`;
};
console.log(getFullName(true, false));
function getFullName12(userEnt) {
    return `${userEnt.firstname}  ${userEnt.surname}`;
}
const user = {
    firstname: 'Ann',
    surname: 'Smith',
    city: 'USA',
    age: 23
};
console.log(getFullName12(user));
//enum (перечисление)
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success); // 200
console.log(Status[404]); // "NotFound"
//Union
function logId(id) {
    console.log(id);
}
logId(1);
logId('lklk');
logId(true);
const arr = ['sdf', 1];
function logId2(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
// Literal Types
function fetchWithAuth(url, method) {
}
fetchWithAuth('s', 'post');
fetchWithAuth('p', 'get');
fetchWithAuth('l', '1');
let a = '123iii';
a = '124';
let user2 = {
    name: 'asd',
    age: 23,
    skills: ['1', '2']
};
let user3 = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
    roleId: 1,
    createdAT: new Date(),
    log(id) {
        return 'Hello';
    },
};
const user24 = {
    name: 'as',
    age: 33
};
const user25 = {
    login: "123156",
    //password: "1231" 
};
//одинаковые
function testPass(user) {
    var _a;
    const t = user.password ? user.password.type : undefined;
    const p = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : console.log('anu');
}
