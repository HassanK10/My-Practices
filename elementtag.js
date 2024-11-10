alert('hello!');
function getname() {
var myName = document.getElementsByName('myname')[0].value;
document.getElementsByName('myname')[0].value= "";
document.getElementsByTagName('h1')[0].innerHTML = myName;
// get element by class name
// get element by id, by class
// .querySelector, querySelectorAll
}