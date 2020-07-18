var h1=200,current_page="none";
var a=["#home","#academics","#faculty","#students","#alumni","#admissions","#campus","#events","#jobs","#tenders"];
var b=["#feedback","#contact","#follow","#f-insta","#f-fb","#f-yt","#f-tw"];

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
		for(i=1;i<=5;i++) {			
			$("#star-"+i).hover(function() {				
				for(j=1;j<=5;j++) {
					$("#star-"+j).stop(true,false);
					$("#star-"+j).css("color","#F3CB42");					
					if(("#"+this.id)==("#star-"+j)) break;
				}
			},function() {
				for(j=1;j<=5;j++) {
					$("#star-"+j).animate({color: '#575757'},200,"swing");													
					if(("#"+this.id)==("#star-"+j)) break;
				}
			});
		}

	}
	{
		$("#submit").hover(function() {
			$(this).css("opacity","0.8");
		},function() {
			$(this).css("opacity","1");
		});
	}

});