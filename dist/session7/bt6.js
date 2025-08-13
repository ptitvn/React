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
class adminAcc extends Account {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
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
//# sourceMappingURL=bt6.js.map