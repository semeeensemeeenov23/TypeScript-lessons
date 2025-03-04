//Функция
function getFullName(firstname, surname) {
    return `${firstname}  ${surname}`;
}

//Стрелочная
const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname}  ${surname}`;
}

console.log(getFullName(true, false));



function getFullName12(userEnt):string {
    return `${userEnt.firstname}  ${userEnt.surname}`;
}

const user = {
    firstname: 'Ann', 
    surname: 'Smith',
    city: 'USA',
    age: 23
}

console.log(getFullName12(user));

//enum (перечисление)
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  
  console.log(Status.Success); // 200
  console.log(Status[404]);    // "NotFound"

function logId(id: string | number | boolean) {
    console.log(id);
}

logId(1);
logId('lklk');
logId(true);

const arr = ['sdf', 1];

function logId2(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase)
    } else if (typeof id === 'number') {
        console.log(id)
    } else {
        console.log(id)
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err)
    } else {
        console.log(err)
    }
}

function logObject(obj: {a : number} | {b : number}) {
    if ('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}