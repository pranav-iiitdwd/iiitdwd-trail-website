var h1=200,h2=300,current_page="home";
var a=["#home","#academics","#faculty","#students","#alumni","#admissions","#campus","#events","#jobs","#tenders"];
var b=["#feedback","#contact","#follow","#f-insta","#f-fb","#f-yt","#f-tw"];
var c=["#img2-img1","#img2-img2","#img2-img3"];

$(document).ready(function(){	
	/*hovering over menu*/{
		for(i=0;i<10;i++) {
			if( a[i]==("#"+current_page) ) {				
				$(a[i]).hover(function() {
					$("#"+this.id+"-drop").stop(true,false);					
					$("#"+this.id+"-drop").fadeIn(200);
					$(this).stop(true,false);
					$(this).animate({ backgroundColor : "#5C5C5C" },h1,"swing");
				},function() {
					$("#"+this.id+"-drop").stop(true,false);
					$("#"+this.id+"-drop").fadeOut(200);
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
	/*hovering over img arrows*/{
		$("#r-a").hover(function() { $(this).css("backgroundColor","#143975"); },
			function() { $(this).css("backgroundColor","#414141"); });

		$("#l-a").hover(function() { $(this).css("backgroundColor","#143975"); },
			function() { $(this).css("backgroundColor","#414141"); });

		$("#extra-par").hover(function() {			
			$("#r-a").stop(true,false);
			$("#l-a").stop(true,false);
			$("#r-a").animate({ opacity: '1' },h2,"swing");
			$("#l-a").animate({ opacity: '1' },h2,"swing");
		},function() {
			$("#r-a").animate({ opacity: '1' },100,"swing");
			$("#l-a").animate({ opacity: '1' },100,"swing");
			$("#r-a").animate({ opacity: '0' },h2,"swing");
			$("#l-a").animate({ opacity: '0' },h2,"swing");
		});
		$("#r-a").css("cursor","pointer");
		$("#l-a").css("cursor","pointer");
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
	/*hovering over img-tiles*/{
		$("#div-6").css("cursor","pointer");
		for(i=0;i<3;i++) {
			$(c[i]).hover(function() {								
				$(this).css("opacity","1");
				$(this).stop(true,false);
			},function() {								
				$(this).css("opacity","0.5");
				$(this).stop(true,false);
			});
		}
		$("#extra-par").hover(function() {			
			$("#div-6").stop(true,false);
			$("#div-6 *").stop(true,false);
			$("#div-6").animate({ opacity: '1' },h2,"swing");
			$("#div-6 *").animate({ opacity: '0.5' },h2,"swing");
		},function() {
			$("#div-6").animate({ opacity: '1' },100,"swing");
			$("#div-6 *").animate({ opacity: '0.5' },100,"swing");
			$("#div-6").animate({ opacity: '0' },h2,"swing");
			$("#div-6 *").animate({ opacity: '0' },h2,"swing");
		});		
	}
});