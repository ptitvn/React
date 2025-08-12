"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log(`${this.userName} đã đăng nhập.`);
        this.isLogin = true;
    }
    logout() {
        if (this.isLogin) {
            console.log(`${this.userName} đã đăng xuất.`);
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            super.login();
        }
        else {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}
const user1 = new userAcc(1, "user1", "password1", "user", "active");
user1.login();
user1.logout();
const user2 = new userAcc(2, "user2", "password2", "user", "banned");
user2.login();
user2.logout();
//# sourceMappingURL=bt5.js.map