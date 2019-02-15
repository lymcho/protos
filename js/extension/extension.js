console.log("hi");

//cta button
var cta = document.querySelector(".cta")
var peel = document.querySelector(".front")

cta.addEventListener("mouseover", function(){
	peel.classList.add("peel");
	console.log("wait");
})
cta.addEventListener("mouseleave", function(){
	peel.classList.remove("peel");
	console.log("wait");
})
