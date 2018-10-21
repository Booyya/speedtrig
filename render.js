var probWrap = document.getElementById("problems");
var ansWrap = document.getElementById("answers");
function formatProb (prob) {
	var parsed = prob.match(/^(\w+)\((-?)(\d*)((?:pi)?)(?:\/(\d+))?\)$/i);
	if (parsed == null) {
		return prob;
	}
	var ret = "$\\" + parsed[1];
	if (parsed[2]) {
		ret += "\\left(" + parsed[2];
	} else {
		ret += " ";
	}
	if (parsed[5]) {
		ret += "\\frac{";
	}
	if (parsed[3]) {
		ret += parsed[3]
	}
	if (parsed[4]) {
		ret += "\\pi";
	}
	if (parsed[5]) {
		ret += "}{" + parsed[5] + "}";
	}
	if (parsed[2]) {
		ret += "\\right)";
	}
	return ret + "$";
}
function formatAns (ans) {
	if (ans == "Undefined") {
		return ans;
	}
	var parsed = ans.match(/^(-?)(\d?)(?:\s\*\s)?(?:sqrt\((\d+)\))?\/?(\d*)$/);
	if (parsed == null) {
		return ans;
	}
	var ret = "$" + parsed[1];
	if (parsed[4]) {
		ret += "\\frac{";
	}
	ret += parsed[2];
	if (parsed[3]) {
		ret += "\\sqrt{" + parsed[3] + "}";
	}
	if (parsed[4]) {
		ret += "}{" + parsed[4] + "}";
	}
	ret += "$"
	return ret;
}
for (var i = 0; i < probArr.length; i ++) {
	var item = document.createElement("div");
	item.className = "item";
	var text = document.createElement("p");
	text.className = "math";
	text.innerText = (i + 1) + ". " + formatProb(probArr[i].value);
	var atext = document.createElement("p");
	atext.className = "math answer";
	atext.innerText = formatAns(probArr[i].answer);
	item.appendChild(text);
	var aitem = item.cloneNode(true);
	aitem.appendChild(atext);
	probWrap.appendChild(item);
	ansWrap.appendChild(aitem);
}
MathJax.Hub.Typeset()