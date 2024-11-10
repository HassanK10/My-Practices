var date = new Date();
function getdate() {
	document.getElementById('res').innerText = date;
}

function getyear() {
	document.getElementById('res').innerText = date.getFullYear();
}

function getmonth() {
	document.getElementById('res').innerText = date.getMonth();
}
function getDate () {
	document.getElementById('res').innerText = date.getDate();
}
function gethours () {
	document.getElementById('res').innerText = date.getHours();
}
function getminutes () {
	document.getElementById('res').innerText = date.getMinutes();
}
function getseconds () {
	document.getElementById('res').innerText = date.getSeconds();
}
function getmilliseconds () {
	document.getElementById('res').innerText = date.getMilliseconds();
}
function gettime () {
	document.getElementById('res').innerText = date.getTime();
}
function getday () {
	document.getElementById('res').innerText = date.getDay();
}
var a = {
	"1" : "Hello",
};
document.write(typeof a);
