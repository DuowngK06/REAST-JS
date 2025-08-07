function kiemTraChanLe(so) {

    if (typeof so !== "number" || isNaN(so)) {
        return "Không phải là số.";
    }


    if (so % 2 === 0) {
        return `Số ${so} là số chẵn.`;
    } else {
        return `Số ${so} là số lẻ.`;
    }
}


console.log(kiemTraChanLe(4));
console.log(kiemTraChanLe(7));
console.log(kiemTraChanLe("abc"));
console.log(kiemTraChanLe(NaN));   
