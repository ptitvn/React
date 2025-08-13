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

class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: String, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            this.history.push(`Rút tiền: ${amount}`);
        } else {
            console.log("Số tiền rút vượt quá hạn mức.");
        }
    }
}
const checkingAccount = new CheckingAccount("CA12345", 1010, 500);
checkingAccount.deposit(200);
checkingAccount.withdraw(2200);
checkingAccount.showHistory();
