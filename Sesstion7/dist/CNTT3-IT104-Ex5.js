class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(password) {
        if (password === this.password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công!");
        }
        else {
            console.log("Sai mật khẩu!");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công!");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
            return;
        }
        super.login(password);
    }
}
const user1 = new userAcc("001", "nguyenvana", "123456", "user", "active");
const user2 = new userAcc("002", "tranthib", "654321", "user", "banned");
user1.login("123456");
user1.logout();
user2.login("654321");
