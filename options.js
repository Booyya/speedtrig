var functions = ["sin", "cos", "tan", "cot", "sec", "csc"];
var denoms = [4, 6];
var bounds = [-3, 3];
var probs = 12;
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
if (getUrlParameter("n") !== "" && ! isNaN(Number(getUrlParameter("n")))) {
	probs = Number(getUrlParameter("n"));
}