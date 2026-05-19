function rateLimiter(fn, limit) {

    return function (){
        if (limit <= 0) {
        setTimeout(function() {
            return `${fn}`
        }, 3000);
    }
} else {
    return `Rate limit exceeded`
}
}
let solution= rateLimiter(`checked`,1);
console.log(solution)