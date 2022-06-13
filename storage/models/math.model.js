function checkOddEven(num) {
    if (typeof num === "string") {
        throw new Error("n must be a number")
    }
    return num % 2 === 0 ? 'even' : 'odd';
}

function sum(a, b) {
    return a + b;
}

function is21Century() {
    return new Date().getFullYear() >= 2000 && new Date().getFullYear() < 2100;
}

module.exports = {
    checkOddEven,
    sum,
    is21Century,
};
