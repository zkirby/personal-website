$(document).ready(function(){
	"use strict";

	var current_pos = "home";
	var movement = {};

	$("div[id=ball]").hover(
		function() {
			var $text = $(this).find(".inside-text");
			var $icon = $(this).find("#icon");
			$icon.css("color", "#1B98E0");
			$text.css("display", "block"); 
		},
		function() {
			var $text = $(this).find(".inside-text");
			var $icon = $(this).find("#icon");
			$icon.css("color", "#E8F1F2");
			$text.css("display", "none");
		});

	// Allows for the movement and flow of the bubbles (balls)
	// whenever a user clicks on a bubble
	$("div[id=ball]").click(function() {

		// Our key players: the bubbles
		var $name = $(".name-text");
		var $first = $("div[id=ball][class=first-ball]");
		var $second = $("div[id=ball][class=second-ball]");
		var $third = $("div[id=ball][class=third-ball]");
		var $fourth = $("div[id=ball][class=fourth-ball]");
		var bubbles_array = [$first, $second, $third, $fourth]

		// The fourth ball just liks to my resume
		if(this.className == "fourth-ball"){
			window.open("Resources/resume.pdf");

		// The Second ball is the about page
		} else if(this.className == "second-ball"){
			if(current_pos != "about-inpage"){
				flush_page(current_pos, movement);

				$name.fadeOut(); animate_bubbles(bubbles_array,"bubble_drop", true) // Animate the homescreen
				$(".about-inpage").animate({top: "-8%"}, 1000); // Animate the about page
				current_pos = "about-inpage"; movement = {top: "-100%"};// Update our position 

			} else {
				$(".about-inpage").animate({top: "-100%"}, 800); // Animate the about page
				animate_bubbles(bubbles_array, "bubble_return"); $name.fadeIn(2000);
				current_pos = "home"; // Update our position 
			};

		// The Third ball is the cs page
		} else if(this.className == "third-ball"){
			if(current_pos != "cs-inpage"){
				flush_page(current_pos, movement);

				$name.fadeOut(); animate_bubbles(bubbles_array,"bubble_right", true) // Animate the homescreen
				$(".cs-inpage").animate({right: "-15%"}, 1000); $(".cs-inpage").show();// Animate the cs page
				current_pos = "cs-inpage"; movement = {right: "-100%"}; // Update our position 

			} else {
				$(".cs-inpage").animate({right: "-100%"}, 800); // Animate the cs page
				animate_bubbles(bubbles_array,"bubble_return"); $name.fadeIn(2000);
				$(".cs-inpage").hide(); // Hide it 
				current_pos = "home"; // Update our position 
			};

		// The Fourth ball is the film page
		} else if(this.className == "first-ball"){
			console.log("True");
			if(current_pos != "film-inpage"){
				flush_page(current_pos, movement);

				$name.fadeOut(); animate_bubbles(bubbles_array,"bubble_left", true) // Animate the homescreen
				$(".film-inpage").animate({left: "-13.5%"}, 1000); // Animate the film page
				current_pos = "film-inpage"; movement = {left: "-100%"};// Update our position 

			} else {
				$(".film-inpage").animate({left: "-100%"}, 800); // Animate the film page
				animate_bubbles(bubbles_array,"bubble_return"); $name.fadeIn(2000);
				current_pos = "home"; // Update our position 
			};
		};
	});


	// Animation Functions
	function animate_bubbles(obj_array, animation_string, scale) {
		/* used to animate all the bubbles at once*/
		animate_obj(animation_string+"_one", obj_array[0], scale);
		animate_obj(animation_string+"_two", obj_array[1], scale);
		animate_obj(animation_string+"_three", obj_array[2], scale);
		animate_obj(animation_string+"_four", obj_array[3], scale);
	};

	function animate_obj(animation_string, obj, scale) {
		/* Adds a CSS animation, remmebers the end state
		of the animation and then removes the animation and saves 
		the current state of the jQuery Object */
		obj.css("animation", animation_string+" 1s ease-out 0s 1");
		obj.css("animation-fill-mode", "forwards");

		// when the animation ends, clear the style and then 
		// retain the current state of the animation.
		obj.on('webkitAnimationEnd', function() {
			var top = obj.css("top"); var left = obj.css("left");
			obj.removeAttr("style");
			obj.css("top", top); obj.css("left", left); 
			if(scale){
				obj.css("transform", "scale(0.9)"); obj.css("-webkit-transform", "scale(0.9)");
				obj.css("-moz-transform", "scale(0.9)"); obj.css("-o-transform", "scale(0.9)");
			}
    	});
	};

	function flush_page(current_pos, movement){
		/* Return all pages back to the "Home"
		 Position, exluding home page */
		 if(current_pos != "home"){
			$("."+current_pos).animate(movement, 800);
		}
	}


});