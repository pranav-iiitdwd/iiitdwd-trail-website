var h1=200,current_page="none";
var a=["#home","#academics","#faculty","#students","#alumni","#admissions","#campus","#events","#jobs","#tenders"];
var b=["#feedback","#contact","#follow","#f-insta","#f-fb","#f-yt","#f-tw"];
var c=["#img-so-1","#img-so-2","#img-so-3","#img-so-4"];
var d=["#link-so-1","#link-so-2","#link-so-3","#link-so-4"]

$(document).ready(function(){	
	/*hovering over menu*/{
		for(i=0;i<10;i++) {
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
	{
		for(i=0;i<4;i++) {
			$(c[i]).hover(function() {
				$(this).css("opacity","0.5");				
			},function() {
				$(this).css("opacity","1");				
			});
		}
		for(i=0;i<4;i++) {
			$(d[i]).hover(function() {
				$(this).css("color","#9BB6E3");				
			},function() {
				$(this).css("color","#666666");				
			});
		}
	}
});