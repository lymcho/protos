//controls for tabs, pure jquery
//shut off all tab and only show slide1 at first 
function show(slideNum){
  $(".slide").hide();
  $(".tab").removeClass("rail_active");
  var num =`#slide${slideNum}`
  var tabnum= `#tab${slideNum}` 
  $(num).show();
  $(tabnum).addClass("rail_active");

  
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






//macro when start typing the drop down comes out
var button = document.querySelector(".dropdown-trigger")
var menu = document.querySelector(".dropdown-menu")

button.addEventListener("input",function(){
	// console.log("hi")
   //menu.classList.remove("is-invisible");
	menu.classList.add("appear");
	
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

// //click on push right icon to toggle visibility of plugin
  
var pushright = document.querySelector(".pushright") //pushright icon
var rail = document.querySelector(".rail") //rail
var plugin= document.querySelectorAll(".slide") //area to hide



pushright.addEventListener('click', function (event) {
      if (plugin[0].style.display == "block") {
         plugin[0].style.display = "none";
        rail.style.right="0px";
        // pushright.classList.remove("fa-chevron-right");
        // pushright.classList.add("fa-chevron-left");
         
      } else {
          plugin[0].style.display = "block";
        rail.style.right="440px";
        //  pushright.classList.remove("fa-chevron-left");
        // pushright.classList.add("fa-chevron-right");
        
     
      }
    }
  );
//use is visible method
// pushright.addEventListener('click', function (event) {
//       plugin[0].classList.toggle("is-invisible");
//       rail.style.right="0px";
//     }
//   );



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
  textarea.innerHTML="I apologize for the trouble here and appreciate you reaching out so that we can make it right. Given the circumstances, I'd be happy to issue a refund for this purchase to your original form of payment, as requested. We'll process your refund right away and send you a confirmation email as soon as we do. Please note that if you paid by credit or debit card it may take your financial institution several days to post this refund to your account.";
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



//click slide 5 to update the text to the second level
var slice5= document.querySelector(".slice5")
function updateText(x, y){
  //updating the selected slice(x)'s text into y
  document.querySelector(x).innerHTML=y;
}
slice5.addEventListener("click", function(){
  updateText(".slice1", "Thanks&nbsp;for your&nbsp;patience (/thanks)");
  updateText(".slice2", "Call&nbsp;Back Request (/call)");
  updateText(".slice3", "Please Wait&nbsp;1 (/wait1)");
  updateText(".slice4", "Please Wait&nbsp;2 (/wait2)");
  updateText(".slice5", "Still Looking&nbsp;1 (/look1)");
  updateText(".slice6", "Still Looking&nbsp;2 (/look2)");
  
});
// then click slide 1 to fill out text area
var slice1= document.querySelector(".slice1")
slice1.addEventListener("click", function(){
  switchText(1);        
  textarea.innerHTML="Thanks for your patience.";
});
//if click back button, update text back to what they used to be
var back= document.querySelector(".center")
back.addEventListener("click", function(){
  updateText(".slice1", "Greeting /Idle /Closing");
  updateText(".slice2", "Refund /Trade&nbsp;In /Deny");
  updateText(".slice3", "LAER");
  updateText(".slice4", "Order Creation");
  updateText(".slice5", "Please&nbsp;Wait /Call&nbsp;Back");
  updateText(".slice6", "Gamification");
  
});





//clicking "copy to chat" clears the input field
function clearFields(){
  document.querySelector("#searchmacro").value="";
  //menu.classList.add("is-invisible");
}

function closeDropdown(){
  menu.classList.remove("appear");
  
}

//clicking "copy to chat" also pupulates #chat element 
function populateChat(){
  document.querySelector("#chat").innerHTML=textarea.innerHTML;
}
var copytochat = document.querySelector("#copytochat")

copytochat.addEventListener("click", function(){
  clearFields();
  closeDropdown();
  populateChat();
});


//clicking on order id drop shows a pic

var showOrder = document.querySelector("#showOrder");
var orders = document.querySelector(".orders");

showOrder.addEventListener("click", function(){
  orders.classList.toggle("is-invisible");
});



//clicking on the switch will change text
var switchbutton= document.querySelector("#tab4")
switchbutton.addEventListener("click", function(){
  this.classList.toggle("rail_active");
  if (this.innerHTML==="MV OFF"){
    this.innerHTML="MV ON";
  }
  else{
    this.innerHTML="MV OFF";
  }
  
});



