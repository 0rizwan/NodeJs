// console.log("bsdk")
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let avg = sum/arr.length;
    return avg;
}
module.exports = {
    avg: average,
    b: "bsdk",
    c: "chutiya"
}

// module.exports itself is Object. we can write the above code like below also
module.exports.name = "Jerry";
