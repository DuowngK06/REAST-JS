function delayedCallback(callback, number) {
    setTimeout(() => {
        callback();
    }, number)
    //Định nghĩa hàm callback
}
function callback() {
    console.log('học bất đồng bộ trong js');
}
delayedCallback(callback, 3000);
