function tinhTongCacMang(...dsMang) {
    const ketQua = dsMang.map(mang => {

        return mang.reduce((tong, giaTri) => tong + giaTri, 0);
    });
    return ketQua;
}
const tong = tinhTongCacMang([1, 2, 3], [4, 5], [10, 20, 30]);

console.log(tong); 
