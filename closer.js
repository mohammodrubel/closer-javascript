const bank = ownar =>{
    balance = 0
    return  {
        diposit:amount =>{
            balance +=amount;
            return balance;
        },
        withdrow:amount =>{
            balance -=amount;
            return balance;
        }
    }
}

const mohammodrubel = bank('mohammod Rubel')
console.log(mohammodrubel.diposit(2344))
console.log(mohammodrubel.withdrow(344))