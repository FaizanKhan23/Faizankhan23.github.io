
// .............smoth scroll.........

$(document).ready(function(){

	$('#tophome').click(function(){
		var pos = $('#home').offset().top-30;
		$('html').animate({scrollTop:pos},1200);
			return false;
	});
	
	$('#about').click(function(){
		
		var pos = $('#abt-sec').offset().top-135;
			$('html,body').animate({scrollTop:pos},1200);
		return false;
	});
	
	$('#my-skill').click(function(){
		//return false;
		var pos = $('#skill').offset().top-195;
			$('html').animate({scrollTop:pos},1200);
				return false;
	});
	
	
	$('#to-potf').click(function(){
		var pos = $('#portfolio').offset().top-30;
		$('html').animate({scrollTop:pos},1200);
		return false;
		
	});
	
	$('#my-services').click(function(){
		var pos = $('#services').offset().top-0;
		$('html').animate({scrollTop:pos},1200);
		return false;
		
	});
	
	$('#my-cont').click(function(){
		var pos = $('#contact').offset().top-30;
		$('html').animate({scrollTop:pos},1200);
		return false;
	});
	
	$('#abt-btn').click(function(){
		var pos = $('#aboutus').offset().top-30;
		$('html').animate({scrollTop:pos},1200);
		return false;
		
		
		
	});

	
});




 
 // .............scrol up up arrow.........
$(document).ready(function() 
{
    $(window).scroll(function() {
		if($(this).scrollTop() >300)
		{
			$("#top").fadeIn();
			}
			else {
				$("#top").fadeOut();
			}

	});
	
	
//--------- up arrow clicks slow scrol------------
  $("#top").click(function()
  {
	  $("html").animate({scrollTop:0},1200);
	 return false;
	  });
 		
});


// .............scroll animation.........

$(document).ready(function(){
	
              new WOW().init();
			  
			  });
			  
			  
//..........filter grallery............

$(document).ready(function(){
    // clicking button with class "category-button"
    $(".category-button").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        
        // show all items
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {   
            // hide all items
            $(".all").not('.'+filterValue).hide("slow");
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show("slow");
        }
    });

});

 




