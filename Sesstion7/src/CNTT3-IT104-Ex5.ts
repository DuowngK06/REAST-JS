class Account {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }


    public login(password: string): void {
        if (password === this.password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công!");
        } else {
            console.log("Sai mật khẩu!");
        }
    }


    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công!");
        }
    }
}

class userAcc extends Account {
    public status: "active" | "banned";

    constructor(
        id: string,
        userName: string,
        password: string,
        role: string,
        status: "active" | "banned"
    ) {
        super(id, userName, password, role);
        this.status = status;
    }

    public override login(password: string): void {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
            return;
        }


        super.login(password); ``
    }
}


const user1 = new userAcc("001", "nguyenvana", "123456", "user", "active");
const user2 = new userAcc("002", "tranthib", "654321", "user", "banned");


user1.login("123456");
user1.logout();


user2.login("654321");
