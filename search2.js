var h1=200,current_page="none";
var a=["#home","#academics","#campus-life","#alumni","#admissions","#engage"];
var b=["#feedback","#contact","#follow","#f-insta","#f-fb","#f-yt","#f-tw"];

var c=["home","academics","campus life","alumni","admissions","engage with iiit dharwad","feedback","contact us","follow us","instagram",
		"facebook","you tube","twitter","cs department","cs curriculum","ec department","ec curriculum","aims","faculty","academic callender",
		"research","campus","events","jobs","tenders"];

var d=["home.html","academics.html","campus-life.html","alumni.html","admissions.html","engage.html","feedback.html","contact.html","follow.html",
		"https://www.instagram.com/iiitdwd_untold_stories._/","https://www.facebook.com/IIIT-Dharwad-107055984131970",
		"https://www.youtube.com/channel/UCVvvR0-TvLQOJehUPkQ_Cwg","https://twitter.com/dharwad_iiit","cs.html","https://iiitdwd.ac.in/docs/CSE_cur.pdf",
		"ec.html","https://iiitdwd.ac.in/docs/ECE_cur.pdf","http://203.129.246.120:9090/aims/","faculty.html","https://iiitdwd.ac.in/docs/Academic_Calender.pdf",
		"research.html","campus.html","events.html","jobs.html","tenders.html"];

var passed_input=localStorage.getItem("passed_input");
var f2=0;
f2=localStorage.getItem("f2");

var e = new Array(25); 

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
	/* Passing search mechanism*/{
		if(f2==1) {
			$("#search-text").val(passed_input);
			for(i=0;i<25;i++) e[i]=1;
            var input = document.getElementById("search-text").value;
            input=input+"";

            document.getElementById("searched-text").innerHTML ="Searched text &nbsp; : &nbsp; " + input;
            document.getElementById("search-result-head").innerHTML ="Search Results :"

            input.replace(/(^\s*)|(\s*$)/gi,"");
            input.replace(/[ ]{2,}/gi," ");
            input.replace(/\n /,"\n");
            var res = input.split(" ");
            l1= input.split(" ").length;
            j=1; f1=0;
            for(k=0;k<l1;k++) {
                for(i=0;i<25;i++) {
                    var res2 = c[i].split(" ");
                    l2= c[i].split(" ").length;
                    for(l=0;l<l2;l++) {
                        if(res[k]==res2[l]){
                            if(e[i]==1) {
                                f1=1; e[i]=0;
                                document.getElementById("search-result-"+j).innerHTML = c[i];
                                var yourElement = document.getElementById("search-result-"+j);
                                yourElement.setAttribute('href', d[i]);
                                j++;
                            }                           
                        }
                    }                   
                }
            }             
            for(i=j;i<=5;i++){
                document.getElementById("search-result-"+i).innerHTML = ""; 
            }
            if(f1==1) {
                document.getElementById("search-alert").innerHTML = "";
            }
            else if(f1==0) {
                document.getElementById("search-alert").innerHTML = "Keyword not found, click the below link to go to feedback page.";                
                document.getElementById("search-result-"+1).innerHTML = "Feedback page";
                var yourElement = document.getElementById("search-result-"+1);
                yourElement.setAttribute('href', "feedback.html");
            }

		}

	}
	/* Search bar mechanics */{
		$("#search-button").click(function() {
            for(i=0;i<25;i++) e[i]=1;
    		var input = document.getElementById("search-text").value;
    		input=input+"";

    		document.getElementById("searched-text").innerHTML ="Searched text &nbsp; : &nbsp; " + input;
    		document.getElementById("search-result-head").innerHTML ="Search Results :"

    		input.replace(/(^\s*)|(\s*$)/gi,"");
    		input.replace(/[ ]{2,}/gi," ");
    		input.replace(/\n /,"\n");
    		var res = input.split(" ");
    		l1= input.split(" ").length;
    		j=1; f1=0;
    		for(k=0;k<l1;k++) {
    			for(i=0;i<25;i++) {
    				var res2 = c[i].split(" ");
    				l2= c[i].split(" ").length;
    				for(l=0;l<l2;l++) {
    					if(res[k]==res2[l]){
                            if(e[i]==1) {
                                f1=1; e[i]=0;
                                document.getElementById("search-result-"+j).innerHTML = c[i];
                                var yourElement = document.getElementById("search-result-"+j);
                                yourElement.setAttribute('href', d[i]);
                                j++;
                            }    						
    					}
    				}    				
    			}
    		}             
    		for(i=j;i<=5;i++){
    			document.getElementById("search-result-"+i).innerHTML = "";	
    		}
    		if(f1==1) {
    			document.getElementById("search-alert").innerHTML = "";
    		}
    		else if(f1==0) {
    			document.getElementById("search-alert").innerHTML = "Keyword not found, click the below link to go to feedback page.";                
    			document.getElementById("search-result-"+1).innerHTML = "Feedback page";
    			var yourElement = document.getElementById("search-result-"+1);
 				yourElement.setAttribute('href', "feedback.html");
    		}
    		
		});
	}
	/* Search hover */{
		$("#search-button").hover(function() {
			$(this).css("opacity","0.4");
		},function() {
			$(this).css("opacity","1");
		});
	}	
});

