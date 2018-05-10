
var modal = document.querySelector('.modal');
var overlay=document.querySelector('.overlay');
var close = document.querySelector('#close');
var open = document.querySelector('.hotspot');
//fn that hide overlay and modal 
function hideModal(){
	modal.classList.add("hide");
	overlay.classList.add("hide");
}
//when click button close on modal
close.addEventListener("click", function(){
	hideModal();
})
