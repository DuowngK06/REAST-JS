function calculate(a,b,callback){
    let result = a + b;
    callback(result);
}

//Định nghĩa hàm callback
function callbackFn(print){
    consologe.log('Kết quả là: ${print}');
}
calculate(5,6,callbackFn);