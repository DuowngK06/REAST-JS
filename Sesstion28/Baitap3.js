function processArray(arr, callback) {
    let delay = 1000; // 1 giây

    arr.forEach((item, index) => {
        setTimeout(() => {
            callback(item);
        }, delay * index);
    });
}

// Ví dụ callback
function printNumber(num) {
    console.log("Phần tử thứ: " + num);
}

// Gọi hàm
processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], printNumber);
