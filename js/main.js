
/*
function openDrop(e) {
	var item = e.childNodes[3];

	if (item.style.opacity === "1" && item.style.pointerEvents === "all") {
		item.style.opacity = "0";
		item.style.pointerEvents = "none";
	} else {
		item.style.opacity = "1";
		item.style.pointerEvents = "all";
	}

	console.log(item)
}

*/


var nav_btn = document.querySelectorAll('.nav_btn');
function activeButton() {
	removeActive();
	this.classList.add('active-nav');
}
function removeActive() {
	nav_btn.forEach(item => item.classList.remove('active-nav'));
}
nav_btn.forEach(item => item.addEventListener('click', activeButton));



var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal_search = document.getElementById('id03');

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		modal2.style.display = "none";
		console.log(event.target);
	} else if (event.target == modal2) {
		modal2.style.display = "none";
		modal.style.display = "none";
	}
	else if (event.target == modal_search) {
		modal_search.style.display = "none";
		modal2.style.display = "none";
		modal.style.display = "none";
	}
}

function openLogin() {
	document.getElementById('id01').style.display='block';
	document.getElementById('id02').style.display='none';
}

function openRegister() {
	document.getElementById('id01').style.display='none';
	document.getElementById('id02').style.display='block';
}

function openSearch() {
	document.getElementById('id03').style.display='flex';
}


function openMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
		mobile_menu_cont.style.transform = "translateX(0%)";
}
function closeMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
		mobile_menu_cont.style.transform = "translateX(-100%)";
}

/* read more comment */ 

function readMore(comment) {
	var item = comment.parentNode.childNodes[3];
	if (item.style.height === "auto") {
		item.style.height = "44px";
	} else {
		item.style.height = "auto";
	}
}



/* read more comments */
function moreComments() {
	var section = document.getElementById('comment-section');

	if (section.style.height === "auto") {
		section.style.height = "650px";
	} else {
		section.style.height = "auto";
	}
}