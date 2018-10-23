var anscroll = document.getElementById("anscroll");
anscroll.addEventListener("click", function () {
	document.getElementById("answers").scrollIntoView();
});
var opBtn = document.getElementById("opbtn");
var opbox = document.getElementById("options");
opbtn.addEventListener("click", function () {
	if (opbox.className == "hidden optionbox") {
		opbox.className = "optionbox";
	} else {
		opbox.className = "hidden optionbox";
	}
});
var hideops = document.getElementById("ophide");
hideops.addEventListener("click", function () {
	opbox.className = "hidden optionbox";
});
var qinput = document.getElementById("qNum");
qinput.value = probs;