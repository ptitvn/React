"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    logout() {
        if (this.isLogin) {
            console.log(`${this.userName} đã đăng xuất.`);
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`${this.userName} đã đăng nhập.`);
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