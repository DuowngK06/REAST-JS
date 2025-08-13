

enum UserStatus {
    ACTIVE = "ACTIVE",
    BANNED = "BANNED",
}

let u2 = new userAcc(1, "duong1", "123456", false, "user", UserStatus.ACTIVE);
let u3 = new userAcc(2, "duong2", "123456", false, "user", UserStatus.ACTIVE);
let u4 = new userAcc(3, "duong3", "123456", false, "user", UserStatus.ACTIVE);
let u5 = new userAcc(4, "duong4", "123456", false, "user", UserStatus.ACTIVE);

let user = [u2, u3, u4, u5];

class AdminAcc extends Account {
    banUser(id: number) {
        let flag = user.find((e) => {
            return e.id === id;
        });

        if (!flag) {
            console.log("Không tìm thấy id nào trùng vói id mà bạn muốn tìm");
        } else {
            flag.status = UserStatus.BANNED;
            console.log("Đã ban user");
        }
    }
}

let adminAcc = new AdminAcc(99, "Admin", "root123", false, "admin");

adminAcc.banUser(1);