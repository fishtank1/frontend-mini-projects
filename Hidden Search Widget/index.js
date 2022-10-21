const searchBox = document.getElementById('search-box');
const layout = document.getElementById('layout');
// const searchIcon = document.querySelector('.fa-magnifying-glass');

let triggerState = false;

function triggerAction() {
	if(triggerState) {
		layout.style.width="320px";
		searchBox.style.width="72%";
		searchBox.style.display = "block";
		triggerState = false;
	} else {
		layout.style.width="50px";
		searchBox.style.width="0px";
		searchBox.style.display = "none";
		triggerState = true;
	}
}