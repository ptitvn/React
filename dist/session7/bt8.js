"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance = 0;
    history = [];
    status = "active";
    constructor(accountNumber, initialBalance) {
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
    overdraftLimit;
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
const checkingAccount = new CheckingAccount("CA12345", 1000, 500);
checkingAccount.deposit(200);
checkingAccount.withdraw(1200);
checkingAccount.showHistory();
checkingAccount.withdraw(500);
//# sourceMappingURL=bt8.js.map