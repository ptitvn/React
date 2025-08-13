abstract class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;
    
    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    
    login(): void {
        console.log(`${this.userName} đã đăng nhập.`);
        this.isLogin = true;
    }

    logout(): void {
        if (this.isLogin) {
            console.log(`${this.userName} đã đăng xuất.`);
            this.isLogin = false;
        }
    }
}

class userAcc extends Account {
    public status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    login(): void {
        if (this.status === "active") {
            super.login();
        } else {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}

class adminAcc extends Account {
    constructor(id: number, userName: string, password: string, role: string) {
        super(id, userName, password, role);
    }

    banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm.`);
    }
}

const user1 = new userAcc(1, "user1", "password1", "user", "active");
user1.login();
user1.logout();
const user2 = new userAcc(2, "user2", "1234567", "user", "banned");
user2.login();
user2.logout();
const admin = new adminAcc(3, "admin", "adminpass", "admin");
admin.banUser(user1);
user1.login();
user1.logout();