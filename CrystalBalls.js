function solve1(breaks) {
    var d = Math.floor(Math.sqrt(breaks.length));
    for (var i = 0; i < breaks.length; i += d) {
        if (breaks[i] == true) {
            var j = i;
            while (breaks[j]) {
                j -= 1;
            }
            return j + 1;
        }
    }
}
function solve2(breaks) {
    for (var i = 0; i < breaks.length; i++) {
        if (breaks[i] == true) {
            return i;
        }
    }
}
function solve3(breaks) {
    var jmpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (var j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
var breaks = [false, false, true, true, true, true];
console.log(solve1(breaks));
console.log(solve2(breaks));
console.log(solve3(breaks));
