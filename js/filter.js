//when the check boxes are checked
$("#filter-options :checkbox").click(function() 
	{    
       	//first hide everything
        $("#product-list li").hide();

        //iterate through all checked boxes 
       	$("#filter-options :checkbox:checked").each(function() 
       	{
          //show all the element with the same class name
           $("." + $(this).val()).fadeIn();
		});
       //if nothing is checked, show all of the list items
        if($('#filter-options :checkbox').filter(':checked').length < 1) 
        {
        	$("#product-list li").fadeIn();
        	
        }
        
    });

//clicking on the label, will change the state to selected state
$("#filter-options label").click(function(){
  this.classList.toggle("selected");
});





