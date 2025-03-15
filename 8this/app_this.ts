class Payment47 {
    private date: Date = new Date()

    getDate(this: Payment47) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const p = new Payment47();

const user47 = {
    id: 1,
    paymentData: p.getDate.bind(p),
    paymentDataArrow: p.getDateArrow
}

//console.log(p)
console.log(p.getDate())
console.log(user47.paymentData())
console.log(user47.paymentDataArrow())
