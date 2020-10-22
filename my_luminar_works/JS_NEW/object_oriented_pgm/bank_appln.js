class bank
{
    static banks()
    {
     var bank_name ="union"
//     console.log(bank_name)

    }
    constructor(acc_no,person_name,balance)
    {
        this.acc_no=acc_no
        this.person_name=person_name
        this.balance=balance
        //this.bank_name=bank_name
    }

    deposit(amount)
    {
        this.balance+=amount
        console.log("your balance"+this.balance)
    }
    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log("insuffient amount")
        }
        else
        {
            this.balance-=amount
            console.log("cuurent withdraw"+this.balance)
        }
    }
    balance_amount()
    {
        console.log("balance amount"+this.balance)
    }
}
var obj = new bank(111,"arya",20000)
//obj.create_account(111,"arya",200000)
obj.withdraw(2000000)
obj.deposit(50000)
obj.withdraw(5000)
obj.balance_amount()

//outside ob
console.log("outside class"+obj.balance)

var obj1 = new bank()
obj1.create_account(112,"sarath",250000,"sbi")
obj1.withdraw(2000)

bank.banks()

// instance variable this.variable
// local variab

//diff metohods 