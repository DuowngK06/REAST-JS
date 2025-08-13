"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = exports.Account = void 0;
class Account {
    constructor(acccountNumber, balance = 0) {
        this.acccountNumber = acccountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("So tien phai nap lon hon 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nap: +${amount} | So du: ${this.balance}`);
    }
    withdarw(amount) {
        if (amount <= 0) {
            console.log("So tien phai nap lon hon 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Khong du so du");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rut: -${amount} | So du: ${this.balance}`);
    }
    showHistory() {
        console.log("lich su giao dich cua tai khoan" + this.acccountNumber);
        this.history.forEach((e, index) => {
            console.log(`${index + 1}. ${e}`);
        });
    }
}
exports.Account = Account;
class SavingAccount extends Account {
    constructor(acccountNumber, balance, interestRate) {
        super(acccountNumber, balance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("So tien phai nap lon hon 0");
            return;
        }
        if (amount > this.balance) {
            console.log("khong du tien de rut");
            return;
        }
        this.balance -= amount;
        if (this.balance < 0) {
            this.balance = 0;
        }
        this.history.push(`Rut: -${amount} | So du: ${this.balance}`);
    }
}
exports.SavingAccount = SavingAccount;
const mySaving = new SavingAccount("123456", 1000, 0.05);
