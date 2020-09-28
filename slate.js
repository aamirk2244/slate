/*

var l = document.getElementById('login');
l.onclick = function(){
	alert("hellow world");
}
*/
var u = document.getElementById('user');
var p = document.getElementById('pass');
let l = document.getElementById('login');

l.onclick = function(){
	if(u.value == '' || p.value == '')
		alert("Please fill all fields");
	else if(u.value != 'p18-0121' && p.value != 'aspirine')
		alert("your User Id or Password is incorrect");
	else{
		alert("You are Successfully loged in");
	}
		
	}
	
