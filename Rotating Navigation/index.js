// <i class="fa-solid fa-xmark"></i>
/*
Section
	position: absolute;
	rotate: -18deg;
	top: -301px;
	left: 238px;
*/

let rotateable = document.getElementById("main-page");
let rotableState = false;

function presentMenu() {
	console.log(rotableState);
	if(rotableState == false) {
		rotateable.style.transform = "rotate(-20deg) translate(400px, -400px)";
		document.querySelectorAll('.nav-icons').forEach(data => data.style.left = "0px");
		rotableState = true;
	} else {
		rotateable.style.transform = "rotate(0deg) translate(0px, 0px)";
		document.querySelectorAll('.nav-icons').forEach(data => data.style.left = "-200px");
		rotableState = false;
	}
} 