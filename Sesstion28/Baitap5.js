function checkCondition(condition, callback) {
    setTimeout(() => {
        
        callback(condition);
    }, 1000);
}


checkCondition(true, (result) => {
    if (result) {
        console.log("Điều kiện đúng: Thực hiện hành động A");
    } else {
        console.log("Điều kiện sai: Thực hiện hành động B");
    }
});

checkCondition(false, (result) => {
    if (result) {
        console.log("Điều kiện đúng: True");
    } else {
        console.log("Điều kiện sai: false");
    }
});
