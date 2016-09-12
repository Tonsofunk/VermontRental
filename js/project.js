$(document).ready(function(){
	$(function(){
	      $(".jumbler").typed({
	        strings: ["Skiing.", "Golfing.", "Hot Chocolate.", "Jacuzzis.", "Fine-Dining.", "Snow Tubing.", "Snow Boarding.", "Snow Ball Fights!", "Luxury.", "The Green Mountain Resort at Killington, Vermont."],
	        typeSpeed: 5
	      });
    });

    var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

	// this function is what cycles the slides, showing the next or previous slide and hiding all the others
	var showCurrent = function(){
	    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
	   
	  $items.removeClass('show'); // remove .show from whichever element currently has it
	  $items.eq(itemToShow).addClass('show');    
	};

	// add click events to prev & next buttons 
	$('.next').on('click', function(){
	    counter++;
	    showCurrent(); 
	});
	$('.prev').on('click', function(){
	    counter--;
	    showCurrent(); 
	});

	$(function(){
      $(".slides").slidesjs({});
    });
    
});