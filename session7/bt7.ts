class Account {
    public accountNumber: String;
    protected balance: number = 0;
    protected history: String[] = [];
    protected status: String = "active";

    constructor(accountNumber: String, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        this.history.push(`Nạp tiền: ${amount}`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount}`);
        } else {
            console.log("Số dư không đủ.");
        }
    }

    showHistory(): void {
        console.log("Lịch sử giao dịch:");
        for (const record of this.history) {
            console.log(record);
        }
    }
}

class SavingAccount extends Account {
    public interestRate: number;

    constructor(accountNumber: String, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (this.balance - amount >= 0) {
            super.withdraw(amount);
        } else {
            console.log("Không thể rút tiền, số dư không đủ.");
        }
    }
}
const savingAccount = new SavingAccount("SA12345", 1000, 0.05);
savingAccount.deposit(600);
savingAccount.withdraw(200);
savingAccount.showHistory();