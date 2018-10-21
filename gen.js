var functions = ["sin", "cos", "tan", "cot", "sec", "csc"];
var denoms = [4, 6];
var bounds = [-3, 3];
var probs = 12;

var prod = 1;
function gcd (a, b) {
    return b ? gcd(b, a % b) : a;
}
function lcm (x, y) {
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd (x, y));
}
function textRoot (n) {
    if (Math.sqrt(n) % 1) {
        var front = 1;
        for (var i = Math.floor(Math.sqrt(n)); i >= 2; i --) {
            if (n % (i * i) == 0) {
                front *= i;
                n /= i * i;
            }
        }
        return [front, n];
    }
    return [Math.sqrt(n), 1];
}
for (var i = 0; i < denoms.length; i ++) {
    prod = lcm(prod, denoms[i]);
}
function inverse (frac) {
    return [frac[1], frac[0]];
}
function reduce (numerator, denominator){
    var gcdv = gcd(numerator,denominator);
    var ret = [numerator/gcdv, denominator/gcdv];
    if (ret[1] < 0) {
        ret[0] *= -1;
        ret[1] *= -1;
    }
    return ret;
}
function textify (val, sqrt) {
    if (val == 0 || sqrt == 0) {
        return "0"
    } else if (val == 1 && sqrt == 1) {
        return "1";
    } else if (val == 1) {
        return "sqrt(" + sqrt + ")";
    } else if (sqrt == 1) {
        return String(val);
    } else {
        return val + " * sqrt(" + sqrt + ")";
    }
}
function sin (num, den) {
    var trigVal = Math.sin(num * Math.PI / den);
    var frac = reduce(Math.round(Math.pow(trigVal, 2) * prod), prod);
    frac[0] *= frac[1];
    frac[1] *= frac[1];
    var r1 = textRoot(frac[0]);
    var r2 = textRoot(frac[1]);
    var red = reduce(r1[0], r2[0]);
    var dval = textify(red[1], r2[1]);
    if (dval == "1") {
        dval = "";
    }     else {
        dval = "/" + dval;
    }
    return ((trigVal < -0.0001) ? "-" : "") + textify(red[0], r1[1]) + dval;
}
function cos (num, den) {
    var trigVal = Math.cos(num * Math.PI / den);
    var frac = reduce(Math.round(Math.pow(trigVal, 2) * prod), prod);
    frac[0] *= frac[1];
    frac[1] *= frac[1];
    var r1 = textRoot(frac[0]);
    var r2 = textRoot(frac[1]);
    var red = reduce(r1[0], r2[0]);
    var dval = textify(red[1], r2[1]);
    if (dval == "1") {
        dval = "";
    } else {
        dval = "/" + dval;
    }
    return ((trigVal < -0.0001) ? "-" : "") + textify(red[0], r1[1]) + dval;
}
function tan (num, den) {
    var trigVal = Math.tan(num * Math.PI / den);
    if (Math.abs(trigVal) > 300) {
        return "Undefined";
    }
    var frac = reduce(Math.round(Math.pow(trigVal, 2) * prod), prod);
    frac[0] *= frac[1];
    frac[1] *= frac[1];
    var r1 = textRoot(frac[0]);
    var r2 = textRoot(frac[1]);
    var red = reduce(r1[0], r2[0]);
    var dval = textify(red[1], r2[1]);
    if (dval == "1") {
        dval = "";
    } else {
        dval = "/" + dval;
    }
    return ((trigVal < -0.0001) ? "-" : "") + textify(red[0], r1[1]) + dval;
}
function csc (num, den) {
    var trigVal = Math.sin(num * Math.PI / den);
    if (Math.abs(trigVal) < 0.0001) {
        return "Undefined";
    }
    trigVal = 1 / trigVal;
    var frac = reduce(Math.round(Math.pow(trigVal, 2) * prod), prod);
    frac[0] *= frac[1];
    frac[1] *= frac[1];
    var r1 = textRoot(frac[0]);
    var r2 = textRoot(frac[1]);
    var red = reduce(r1[0], r2[0]);
    var dval = textify(red[1], r2[1]);
    if (dval == "1") {
        dval = "";
    } else {
        dval = "/" + dval;
    }
    return ((trigVal < -0.0001) ? "-" : "") + textify(red[0], r1[1]) + dval;
}
function sec (num, den) {
    var trigVal = Math.cos(num * Math.PI / den);
    if (Math.abs(trigVal) < 0.0001) {
        return "Undefined";
    }
    trigVal = 1 / trigVal;
    var frac = reduce(Math.round(Math.pow(trigVal, 2) * prod), prod);
    frac[0] *= frac[1];
    frac[1] *= frac[1];
    var r1 = textRoot(frac[0]);
    var r2 = textRoot(frac[1]);
    var red = reduce(r1[0], r2[0]);
    var dval = textify(red[1], r2[1]);
    if (dval == "1") {
        dval = "";
    } else {
        dval = "/" + dval;
    }
    return ((trigVal < -0.0001) ? "-" : "") + textify(red[0], r1[1]) + dval;
}
function cot (num, den) {
    var trigVal = Math.tan(num * Math.PI / den);
    if (Math.abs(trigVal) < 0.0001) {
        return "Undefined";
    }
    trigVal = 1 / trigVal;
    var frac = reduce(Math.round(Math.pow(trigVal, 2) * prod), prod);
    frac[0] *= frac[1];
    frac[1] *= frac[1];
    var r1 = textRoot(frac[0]);
    var r2 = textRoot(frac[1]);
    var red = reduce(r1[0], r2[0]);
    var dval = textify(red[1], r2[1]);
    if (dval == "1") {
        dval = "";
    }     else {
        dval = "/" + dval;
    }
    return ((trigVal < -0.0001) ? "-" : "") + textify(red[0], r1[1]) + dval;
}

function randBetween (lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

var trigFuncs = {
    sin: sin,
    cos: cos,
    tan: tan,
    csc: csc,
    sec: sec,
    cot: cot
};
var probArr = [];
for (var i = 0; i < probs; i ++) {
    var funcToUse = functions[randBetween(0, functions.length - 1)];
    var den = denoms[randBetween(0, denoms.length - 1)];
    var num = randBetween(den * bounds[0], den * bounds[1]);
    var frac = reduce(num, den);
    var ans = trigFuncs[funcToUse](frac[0], frac[1]);
    var dval = frac[1];
    if (frac[0] == 1) {
        frac[0] = "";
    } else if (frac[0] == -1) {
        frac[0] = "-";
    }
    if (dval == 1) {
        dval = "";
    } else {
        dval = "/" + dval
    }
    if (frac[0] !== 0) {
        frac[0] += "pi";
    }
    probArr.push({
        value: funcToUse + "(" + frac[0] + dval + ")",
        answer: ans
    });
}