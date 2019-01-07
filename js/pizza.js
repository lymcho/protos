//controls for tabs, pure jquery
//shut off all tab and only show slide1 at first 
function show(slideNum){
  $(".slide").hide();
  var num =`#slide${slideNum}` 
  $(num).show();
  
}


function clickShow(tabNum){
  $(`#tab${tabNum}` ).click(function(){
  show(tabNum);
  
  })

}

//initialize
show(1);
//enable click to change tab
var button = document.querySelectorAll(".tab");
for(var i=0; i<button.length+1;i++){
  clickShow(i);
  
  
}









//macro 
var button = document.querySelector(".dropdown-trigger")
var menu = document.querySelector(".dropdown-menu")

button.addEventListener("input",function(){
	// console.log("hi")
	menu.classList.toggle("appear");
	
});

//click to toggele on off the pizza wheel
var hidewheel = document.querySelector(".hidewheel")
var pizza= document.querySelector(".pizzasection")

hidewheel.addEventListener('click', function (event) {
      if (pizza.style.display == "") {
         pizza.style.display = "none";
          hidewheel.innerHTML = "Show Wheel";
      } else {
          pizza.style.display = "";
         hidewheel.innerHTML = "Hide Wheel";
      }
    }
  );

//click on push right icon to toggle visibility of plugin
  
var pushright = document.querySelector(".pushright") //pushright icon
var rail = document.querySelector(".rail") //rail
var plugin= document.querySelector("#slide1") //area to hide


pushright.addEventListener('click', function (event) {
      if (plugin.style.display == "") {
         plugin.style.display = "none";
        rail.style.right="0px";
        pushright.classList.remove("fa-chevron-right");
        pushright.classList.add("fa-chevron-left");
          //hidewheel.innerHTML = "Show Wheel";
      } else {
          plugin.style.display = "";
        rail.style.right="440px";
         pushright.classList.remove("fa-chevron-left");
        pushright.classList.add("fa-chevron-right");
        
        // hidewheel.innerHTML = "Hide Wheel";
      }
    }
  );



//cicking on reason code changes the text in the snippet area
var code=document.querySelectorAll(".code");
var textarea=document.querySelector(".textarea");

function switchText(i){
  //textarea.innerHTML="&nbsp;"+code[i].innerHTML;   
  textarea.style.color="#333333";
}

code[0].addEventListener("click", function(){
  switchText(0);  
  textarea.innerHTML="It looks like this deal is currently unavailable. Every deal we offer is available for a limited amount of time and may sell out before the offer closes, depending on how many the partner business agrees to sell. However, we still have thousands of great deals on our website. On the deal page of our unavailable deals, you can shop for similar deals by selecting See Similar Deals where the Buy button usually is.";
  
});
    
code[1].addEventListener("click", function(){
  switchText(1);                       
  textarea.innerHTML="Good news, this deal is still available. You can purchase it here: www.groupon.com/deals/xxx";
});

code[2].addEventListener("click", function(){
  switchText(2);        
  textarea.innerHTML="I'm more than happy to get to the bottom of this. Could you tell me a little bit more about the issue you're having?";
});


code[3].addEventListener("click", function(){
  switchText(3);        
  textarea.innerHTML="Thanks for bringing this to my attention, and I apologize for any inconvenience. We'll look into the issue right away and correct any errors in our information.";
});

code[4].addEventListener("click", function(){
  switchText(4);        
  textarea.innerHTML="I'm sorry, but based on the info we have, I'm not able to fix this issue. Would it be possible for you to send us a screenshot so that we can see what you are seeing?";
});

code[5].addEventListener("click", function(){
  switchText(5);        
  textarea.innerHTML="Sorry you're having trouble with the shipping address. Groupon Goods currently has some restrictions on where certain items can be shipped.If you are unable to ship packages to your home address or P.O. Box, you can use the address of a friend or family member, or a work address. If you have tried another address and are still having trouble, check out our FA";
});

code[6].addEventListener("click", function(){
  switchText(6);        
  textarea.innerHTML="I entered the shipping address you provided into the XXX_USPS_OR_CANADA_POST_XXX website, and they suggested the format below: XXX_ADDRESS_XXX If the address format does not meet the shipping company’s requirements, it will prevent your order from being accepted in our system.";
});
code[7].addEventListener("click", function(){
  switchText(7);        
  textarea.innerHTML="It looks like the address you're attempting includes the word Box, which may be confusing our system since we are currently not able to ship to P.O boxes. I recommend modifying Box to Bx then try again.";
});

    

