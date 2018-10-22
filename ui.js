var anscroll = document.getElementById("anscroll");
anscroll.addEventListener("click", function () {
	document.getElementById("answers").scrollIntoView();
});
var opBtn = document.getElementById("opbtn");
var opbox = document.getElementById("options");
opbtn.addEventListener("click", function () {
	if (opbox.className == "hidden") {
		opbox.className = "optionbox";
	} else {
		opbox.className = "hidden";
	}
});
var hideops = document.getElementById("ophide");
hideops.addEventListener("click", function () {
	opbox.className = "hidden";
});