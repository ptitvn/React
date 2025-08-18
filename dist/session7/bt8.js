"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountNumber, initialBalance) {
        this.balance = 0;
        this.history = [];
        this.status = "active";
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Nạp tiền: ${amount}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount}`);
        }
        else {
            console.log("Số dư không đủ.");
        }
    }
    showHistory() {
        console.log("Lịch sử giao dịch:");
        for (const record of this.history) {
            console.log(record);
        }
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount}`);
        }
        else {
            console.log("Số tiền rút vượt quá hạn mức.");
        }
    }
}
const checkingAccount = new CheckingAccount("CA12345", 1010, 500);
checkingAccount.deposit(200);
checkingAccount.withdraw(2200);
checkingAccount.showHistory();
//# sourceMappingURL=bt8.js.map