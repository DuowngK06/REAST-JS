function getDataFromAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("lay data tu api1 render du lieu ra  trinh duyet");
            resolve()
        }, 2000)
    })
}

function getDataFromAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("lay data tu api2 render du lieu ra  trinh duyet");
            resolve()
        }, 2000)
    })
}

function getDataFromAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("lay data tu api3 render du lieu ra  trinh duyet");
            resolve()
        }, 2000)
    })
}

function getDataFromAPI4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("lay data tu api4 render du lieu ra  trinh duyet");
            resolve()
        }, 2000)
    })
}
function runAllTask() {
    getDataFromAPI1()
        .then(() => { })
        .then(() => { })
        .then(() => { })
        .then(() => {
            console.log("tat ca du lieu da render het");

        })
        .catch(err => console.log("loi"))

}
