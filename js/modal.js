//
var modal = document.querySelector('.modal');
var overlay=document.querySelector('.overlay');
var close = document.querySelector('#close');
var open = document.querySelector('.hotspot');
//hide overlay and modal at start
function hideModal(){
	modal.classList.add("hide");
	overlay.classList.add("hide");
}
function showModal(){
	modal.classList.add("hide");
	overlay.classList.add("hide");
}

hideModal();

//when click button open, opens overlay and modal
open.addEventListener("click", function(){
	modal.classList.remove("hide");
	overlay.classList.remove("hide");
	window.location = "https://www.target.com";
})

//when click button close on modal
close.addEventListener("click", function(){
	showModal();
})
