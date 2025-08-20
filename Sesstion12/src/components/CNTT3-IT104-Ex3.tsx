const UserInfo: React.FC = () => {

    const user = {
        fullName: "Nguyễn Văn A",
        gender: "Nam",
        birthDate: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội",
    };

    return (
        <div>
            <h3>Thông tin cá nhân</h3>
            <ul>
                <li>
                    Họ và tên: <b>{user.fullName}</b>
                </li>
                <li>
                    Giới tính: <b>{user.gender}</b>
                </li>
                <li>
                    Ngày sinh: <b>{user.birthDate}</b>
                </li>
                <li>
                    Email: <b>{user.email}</b>
                </li>
                <li>
                    Địa chỉ: <b>{user.address}</b>
                </li>
            </ul>
        </div>
    );
};
function CNTT3_IT104_Ex3() {
    return (
        <div>
            <h1>Thông tin người dùng</h1>
            <UserInfo />
        </div>
    );
}