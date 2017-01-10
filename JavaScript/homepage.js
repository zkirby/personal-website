$(document).ready(function(){
	"use strict";

	var current_pos = "home";

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
			if(current_pos != "about-page"){

				$name.fadeOut(); animate_bubbles(bubbles_array,"bubble_drop") // Animate the homescreen
				$(".about-inpage").animate({top: "-10%"}, 1000); // Animate the about page
				current_pos = "about-page"; // Update our position 

			} else {
				$(".about-inpage").animate({top: "-100%"}, 800); // Animate the about page
				animate_bubbles(bubbles_array,"bubble_return"); $name.fadeIn(2000);
				current_pos = "home"; // Update our position 
			};

		// The Third ball is the cs page
		} else if(this.className == "third-ball"){
			if(current_pos != "cs-page"){

				$name.fadeOut(); animate_bubbles(bubbles_array,"bubble_right") // Animate the homescreen
				$(".cs-inpage").animate({right: "-10%", display: "block"}, 1000); // Animate the about page
				current_pos = "cs-page"; // Update our position 

			} else {
				$(".cs-inpage").animate({right: "-100%"}, 800); // Animate the about page
				animate_bubbles(bubbles_array,"bubble_return"); $name.fadeIn(2000);
				$(".cs-inpage").animate({display: "none"}, 10); // Hide it 
				current_pos = "home"; // Update our position 
			};

		// The Fourth ball is the film page
		} else if(this.className == "first-ball"){
			console.log("True");
			if(current_pos != "film-page"){

				$name.fadeOut(); animate_bubbles(bubbles_array,"bubble_left") // Animate the homescreen
				$(".film-inpage").animate({left: "-10%"}, 1000); // Animate the about page
				current_pos = "film-page"; // Update our position 

			} else {
				$(".film-inpage").animate({left: "-100%"}, 800); // Animate the about page
				animate_bubbles(bubbles_array,"bubble_return"); $name.fadeIn(2000);
				current_pos = "home"; // Update our position 
			};
		};
		console.log(this.className);
	});


	// Animation Functions
	function animate_bubbles(obj_array, animation_string) {
		/* used to animate all the bubbles at once*/
		animate_obj(animation_string+"_one", obj_array[0]);
		animate_obj(animation_string+"_two", obj_array[1]);
		animate_obj(animation_string+"_three", obj_array[2]);
		animate_obj(animation_string+"_four", obj_array[3]);
	};

	function animate_obj(animation_string, obj, grow) {
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
    	});
	};

	function flush_pages(Exclude){
		/* Return all pages back to the "Home"
		 Position, exluding a page */

		
		$(".film-inpage").animate({left: "-100%"}, 800);
	}


});