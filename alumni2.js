var h1=200,current_page="alumni";
var a=["#home","#academics","#campus-life","#alumni","#admissions","#engage"];
var b=["#feedback","#contact","#follow","#f-insta","#f-fb","#f-yt","#f-tw"];

$(document).ready(function(){	
	/*hovering over menu*/{
		for(i=0;i<6;i++) {
			if( a[i]==("#"+current_page) ) {				
				$(a[i]).hover(function() {
					$(this).stop(true,false);
					$(this).animate({ backgroundColor : "#5C5C5C" },h1,"swing");
				},function() {
					$(this).stop(true,false);
					$(this).animate({ backgroundColor : "#143975" },h1,"swing");
				});				
			}
			else {
				$(a[i]).hover(function() {
					$(this).stop(true,false);			
					$(this).animate({ backgroundColor : "#5C5C5C", color: "#FFFFFF" },h1,"swing");
				},function() {
					$(this).stop(true,false);			
					$(this).animate({ backgroundColor : "#FFFFFF", color: "#000000" },h1,"swing");
				});				
			}		
		}
	}	
	/*hovering over footer menu*/{
		for(i=0;i<7;i++) {
			$(b[i]).hover(function() {
				$(this).stop(true,false);
				$(this).animate({ opacity: '0.5' },200,"swing");
			},function() {
				$(this).stop(true,false);
				$(this).animate({ opacity: '1' },200,"swing");
			});

		}
	}	
});