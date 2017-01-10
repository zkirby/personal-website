$(document).ready(function(){
	"use strict";

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

	$("div[id=ball]").click(function() {
		if(this.className == "fourth-ball"){
			window.open("Resources/resume.pdf");
		} else if(this.className == "second-ball"){
			$(".name-text").fadeOut();
			$("div[id=ball][class=first-ball]").css("animation", "bubble_drop_one 1s ease-out 0s 1");
			$("div[id=ball][class=second-ball]").css("animation", "bubble_drop_two 1s ease-out 0s 1");
			$("div[id=ball][class=third-ball]").css("animation", "bubble_drop_three 1s ease-out 0s 1");
			$("div[id=ball][class=fourth-ball]").css("animation", "bubble_drop_four 1s ease-out 0s 1");
			$("div[id=ball]").css("animation-fill-mode", "forwards"); $(".home-button").fadeIn("slow");
		}
	});

	$(".home-button").click(function(){
		$(this).fadeOut(); $(".name-text").fadeIn();
	})

});