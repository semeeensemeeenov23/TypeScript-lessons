"use strict";
class Payment47 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment47();
const user47 = {
    id: 1,
    paymentData: p.getDate.bind(p),
    paymentDataArrow: p.getDateArrow
};
//console.log(p)
console.log(p.getDate());
console.log(user47.paymentData());
console.log(user47.paymentDataArrow());
