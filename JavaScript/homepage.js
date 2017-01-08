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
});