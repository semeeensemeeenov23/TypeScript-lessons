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
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success); // 200
console.log(Status[404]); // "NotFound"
