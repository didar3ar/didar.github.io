(function ($) {
	"use strict";

    jQuery(document).ready(function($){



    	$(".project-filter li").on('click', function(){
    		$(".project-filter li").removeClass("active");
    		$(this).addClass("active");
    		var selector = $(this).attr("data-filter");
    		$(".project-list").isotope({
    			filter: selector,
    		});

    	});


        


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	