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
					"nav-button button-eight":
							{"object": $(".nav-button.button-eight"), 
							 "body": $(".reviews-body"),
							 "group": "3"},
					"nav-button button-nine":
							{"object": $(".nav-button.button-nine"), 
							 "body": $(".toppicks-body"),
							 "group": "3"},
					"nav-button button-ten":
							{"object": $(".nav-button.button-ten"), 
							 "body": $(".gallery-body"),
							 "group": "3"},
					"nav-button button-eleven":
							{"object": $(".nav-button.button-eleven"), 
							 "body": $(".recommend-body"),
							 "group": "3"},
					};

	// Set the first buttons active
	set_active(buttons["nav-button button-one"]["object"]);
	set_active(buttons["nav-button button-four"]["object"]);
	set_active(buttons["nav-button button-eight"]["object"]);
	var last_active_top = buttons["nav-button button-one"];
	var last_active_left = buttons["nav-button button-four"];
	var last_active_right = buttons["nav-button button-eight"];


	$("div[class~=nav-button]").click(function(){
		var button = buttons[this.className];
		var group = button["group"]

		if(group == "1"){
			if(button != last_active_top){
				switch_showing(button, last_active_top);
			    set_active(button["object"]); 
			    set_unactive(last_active_top["object"]);
			    last_active_top = button;
			}
		} else if(group == "2") {
			if(button != last_active_left){
				switch_showing(button, last_active_left);
			    set_active(button["object"]); 
			    set_unactive(last_active_left["object"]);
			    last_active_left = button;
			}
		} else if(group == "3"){
			if(button != last_active_right){
				switch_showing(button, last_active_right);
			    set_active(button["object"]); 
			    set_unactive(last_active_right["object"]);
			    last_active_right = button;
			}
		}
	});

	/** Check if button and last active need to switch active states
	function check_switch(button, last_active) {
		if (button != last_active) {
			switch_showing(button, last_active);
			set_active(button["object"]);
			set_unactive(last_active["object"]);
			last_active = button;
		}
	} */

	/** switch the showing states of two buttons*/
	function switch_showing(curr, prev){
		curr["body"].css("display", "block");
		prev["body"].css("display", "none");
		//curr["body"].fadeIn();
		//prev["body"].fadeOut();
	}

	/** set a button to be active */
	function set_active(obj){
		obj.css("background", "#13293D");
	}

	/** set a button to be unactive*/
	function set_unactive(obj){
		obj.removeAttr("style");
	}

});

