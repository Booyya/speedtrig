var functions = ["sin", "cos", "tan", "cot", "sec", "csc"];
var denoms = [4, 6];
var bounds = [-3, 3];
var probs = 12;


var probsPerPage = 12;
var prod = 1;
function gcd (a, b) {
    return b ? gcd(b, a % b) : a;
}
function lcm (x, y) {
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd (x, y));
}
function textRoot (n) {
    if (Math.sqrt(n) % 1) {
        return "sqrt(" + n + ")";
    }
    return Math.sqrt(n);
}
for (var i = 0; i < demons.length; i ++) {
    prod = lcm(prod, denoms[i]);
}
function inverse (frac) {
    return [frac[1], frac[0]];
}
function reduce(numerator,denominator){
    var gcdv = gcd(numerator,denominator);
    return [numerator/gcdv, denominator/gcdv];
}
function sin (num, den) {
    var frac = reduce(Math.round(Math.pow(Math.sin(num * Math.PI / den), 2) * prod), );
}