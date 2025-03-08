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


  //Union
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

// Literal Types
function fetchWithAuth(url: string, method: 'post' | 'get'){
}
fetchWithAuth('s', 'post');
fetchWithAuth('p', 'get');
fetchWithAuth('l', '1')

let a: '123iii' = '123iii'
a = '124'

//Type Aliases
type User = {
    name: string,
    age: number,
    skills: string[]
}
let user2: User = {
    name: 'asd',
    age: 23,
    skills: ['1', '2']
}

//интерфейсы
interface User3 {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string
}

interface Role {
    roleId: number;
}
interface UserWithRole extends User3, Role {
    createdAT: Date;
}

let user3: UserWithRole = {
    name: 'asd',
    age: 23,
    skills: ['1', '2'],
    roleId: 1,
    createdAT: new Date(),

    log(id) {
        return 'Hello'
    },
}

interface UserDic {
    [index: number]: User
}

type UserDic2 = {
    [index: number]: User
}

// Types или interfaces
interface User24 {
    name: string
}
interface User24 {
    age: number
}
const user24: User24 = {
    name: 'as',
    age: 33
}

type ID = string | number;
interface IDI {
    ID: string | number
}


//Опциональность
interface User25 {
    login: string;
    password?: string; //? опция не обязательно
}
const user25: User25 = {
    login: "123156",
    //password: "1231" 
}

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}
//одинаковые
function testPass(user: UserPro) {
    const t = user.password ? user.password.type : undefined
    const p = user.password?.type
}

function test(param?: string) {
    const t = param ?? console.log('anu')
}