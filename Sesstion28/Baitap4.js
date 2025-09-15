function processArray(arr, callback) {
    let delay = 1000; // 1 giây

    arr.forEach((item, index) => {
        setInterver(() => {
            callback(item);
        }, delay * index);
    });
}


function printNumber(num) {
    console.log(num);
}


processArray([1, 2, 3, 4, 5], printNumber);
