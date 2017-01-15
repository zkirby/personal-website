$(document).ready(function(){

	// Button object with all the button info
	var buttons = { "nav-button button-one": 
							{"object": $(".nav-button.button-one"), 
							 "body": $(".me-body"),
							 "group": "1"},
					"nav-button button-two":
							{"object": $(".nav-button.button-two"), 
							 "body": $(".organizations-body"),
							 "group": "1"},
					"nav-button button-three":
							{"object": $(".nav-button.button-three"), 
							 "body": $(".contact-body"),
							 "group": "1"},
					"nav-button button-four":
							{"object": $(".nav-button.button-four"), 
							 "body": $(".projects-body"),
							 "group": "2"},
					"nav-button button-five":
							{"object": $(".nav-button.button-five"), 
							 "body": $(".experience-body"),
							 "group": "2"},
					"nav-button button-six":
							{"object": $(".nav-button.button-six"), 
							 "body": $(".classrev-body"),
							 "group": "2"},
					"nav-button button-seven":
							{"object": $(".nav-button.button-seven"), 
							 "body": $(".resources-body"),
							 "group": "2"},
					};

	// Set the first buttons active
	set_active(buttons["nav-button button-one"]["object"]);
	var last_active = buttons["nav-button button-one"];

	$("div[class~=nav-button]").click(function(){
		var button = buttons[this.className];

		if(button != last_active){
			if(button["group"] == last_active["group"]){
				switch_showing(button, last_active);
			    set_active(button["object"]); 
			    set_unactive(last_active["object"]);
			    last_active = button;
			}
		};
	});

});

function switch_showing(curr, prev){
	curr["body"].css("display", "block");
	prev["body"].css("display", "none");
};

function set_active(obj){
	obj.css("background", "#13293D");
}

function set_unactive(obj){
	obj.removeAttr("style");
}