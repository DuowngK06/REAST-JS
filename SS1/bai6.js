function NguoiDung(name, age = 18, role = "user") {
    return {
        name: name,
        age: age,
        role: role
    };
}


const user1 = NguoiDung("Nguyễn Văn A", 25, "admin");
const user2 = NguoiDung("Trần Thị B");
const user3 = NguoiDung("Lê Văn C", 30);

console.log(user1);
console.log(user2);
console.log(user3); 