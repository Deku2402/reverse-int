module.exports = function reverse(n) {
    let revers = 0;
    if (n < 0) {
        n = n * (-1);
    }
    while (n > 0) {
        revers = revers * 10 + n % 10;
        n = Math.floor(n / 10);

    }
    return revers;
}
