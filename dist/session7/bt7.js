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
class SavingAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (this.balance - amount >= 0) {
            super.withdraw(amount);
        }
        else {
            console.log("Không thể rút tiền, số dư không đủ.");
        }
    }
}
const savingAccount = new SavingAccount("SA12345", 1000, 0.05);
savingAccount.deposit(600);
savingAccount.withdraw(200);
savingAccount.showHistory();
//# sourceMappingURL=bt7.js.map