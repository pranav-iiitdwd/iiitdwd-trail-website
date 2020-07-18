/*function hover1 () {	
	function home_mouseover() { 
		document.getElementById("home").style.backgroundColor= "#5C5C5C";
		
	}
	function home_mouseout() { document.getElementById("home").style.backgroundColor= "#143975"; }
	document.getElementById("home").addEventListener("mouseover",home_mouseover);
	document.getElementById("home").addEventListener("mouseout",home_mouseout);

	function academics_mouseover() { 
	document.getElementById("academics").style.backgroundColor= "#5C5C5C";
	document.getElementById("academics").style.color= "#FFFFFF";
	}
	function academics_mouseout() { 
	document.getElementById("academics").style.backgroundColor= "#FFFFFF";
	document.getElementById("academics").style.color= "#000000";
	}
	document.getElementById("academics").addEventListener("mouseover",academics_mouseover);
	document.getElementById("academics").addEventListener("mouseout",academics_mouseout);

	function students_mouseover() { 
	document.getElementById("students").style.backgroundColor= "#5C5C5C";
	document.getElementById("students").style.color= "#FFFFFF";
	}
	function students_mouseout() { 
	document.getElementById("students").style.backgroundColor= "#FFFFFF";
	document.getElementById("students").style.color= "#000000";
	}
	document.getElementById("students").addEventListener("mouseover",students_mouseover);
	document.getElementById("students").addEventListener("mouseout",students_mouseout);

	function faculty_mouseover() { 
	document.getElementById("faculty").style.backgroundColor= "#5C5C5C";
	document.getElementById("faculty").style.color= "#FFFFFF";
	}
	function faculty_mouseout() { 
	document.getElementById("faculty").style.backgroundColor= "#FFFFFF";
	document.getElementById("faculty").style.color= "#000000";
	}
	document.getElementById("faculty").addEventListener("mouseover",faculty_mouseover);
	document.getElementById("faculty").addEventListener("mouseout",faculty_mouseout);

	function alumni_mouseover() { 
	document.getElementById("alumni").style.backgroundColor= "#5C5C5C";
	document.getElementById("alumni").style.color= "#FFFFFF";
	}
	function alumni_mouseout() { 
	document.getElementById("alumni").style.backgroundColor= "#FFFFFF";
	document.getElementById("alumni").style.color= "#000000";
	}
	document.getElementById("alumni").addEventListener("mouseover",alumni_mouseover);
	document.getElementById("alumni").addEventListener("mouseout",alumni_mouseout);

	function admissions_mouseover() { 
	document.getElementById("admissions").style.backgroundColor= "#5C5C5C";
	document.getElementById("admissions").style.color= "#FFFFFF";
	}
	function admissions_mouseout() { 
	document.getElementById("admissions").style.backgroundColor= "#FFFFFF";
	document.getElementById("admissions").style.color= "#000000";
	}
	document.getElementById("admissions").addEventListener("mouseover",admissions_mouseover);
	document.getElementById("admissions").addEventListener("mouseout",admissions_mouseout);

	function campus_mouseover() { 
	document.getElementById("campus").style.backgroundColor= "#5C5C5C";
	document.getElementById("campus").style.color= "#FFFFFF";
	}
	function campus_mouseout() { 
	document.getElementById("campus").style.backgroundColor= "#FFFFFF";
	document.getElementById("campus").style.color= "#000000";
	}
	document.getElementById("campus").addEventListener("mouseover",campus_mouseover);
	document.getElementById("campus").addEventListener("mouseout",campus_mouseout);

	function events_mouseover() { 
	document.getElementById("events").style.backgroundColor= "#5C5C5C";
	document.getElementById("events").style.color= "#FFFFFF";
	}
	function events_mouseout() { 
	document.getElementById("events").style.backgroundColor= "#FFFFFF";
	document.getElementById("events").style.color= "#000000";
	}
	document.getElementById("events").addEventListener("mouseover",events_mouseover);
	document.getElementById("events").addEventListener("mouseout",events_mouseout);
}
hover1();*/

function total_img_slide() {	
	var i,j=0,prej=0,n=3,o,o2,a,b,c,d; 

	function img_slide2() {
		o=parseFloat(document.getElementById(c).style.opacity);
		o=o+0.01;
		o2=""+o;
		document.getElementById(c).style.opacity=o2;			
	}
	function clear2() {
		document.getElementById(c).style.opacity="1";
		clearInterval(b);
	}
	
	function img_slide() {
		document.getElementById("r-a").removeEventListener("click",r_slide);
		document.getElementById("l-a").removeEventListener("click",l_slide);
		setTimeout(r_event,1000);
		setTimeout(l_event,1000);

		j++; if(j>n) j=1;
		for(i=1;i<=n;i++) {
			a="img-img"; a=a+i;
			if(j!=i) {
				if(i==prej){ document.getElementById(a).style.zIndex=0; }
				else{ document.getElementById(a).style.zIndex=-1; }				
			} 
		}
		prej=j;
		a="img-img"; a=a+j;
		document.getElementById(a).style.zIndex=1;
		document.getElementById(a).style.opacity="0";
		o=0; c=a;
		img_slide2();
		b=setInterval(img_slide2,10);
		setTimeout(clear2,999);		
	}
	img_slide();
	d=setInterval(img_slide,8000);

	function r_slide() {		
		clearInterval(d);
		d=setInterval(img_slide,8000);
		img_slide();
	}
	function r_event() {
		document.getElementById("r-a").addEventListener("click",r_slide);
	}
	r_event();

	function img_slide_dup() {
		document.getElementById("r-a").removeEventListener("click",r_slide);
		document.getElementById("l-a").removeEventListener("click",l_slide);
		setTimeout(r_event,1000);
		setTimeout(l_event,1000);

		j--; if(j<1) j=n;
		for(i=1;i<=n;i++) {
			a="img-img"; a=a+i;
			if(j!=i) {
				if(i==prej){ document.getElementById(a).style.zIndex=0; }
				else{ document.getElementById(a).style.zIndex=-1; }
			}		 
		}
		prej=j;
		a="img-img"; a=a+j;
		document.getElementById(a).style.zIndex=1;
		document.getElementById(a).style.opacity="0";
		o=0; c=a;
		img_slide2();
		b=setInterval(img_slide2,10);
		setTimeout(clear2,999);		
	}

	function l_slide() {		
		clearInterval(d);
		d=setInterval(img_slide,8000);
		img_slide_dup();
	}
	function l_event() {
		document.getElementById("l-a").addEventListener("click",l_slide);
	}
	l_event();

}
setTimeout(total_img_slide,200);

/*function hover2() {
	document.getElementById("r-a").style.cursor = "pointer";
	document.getElementById("l-a").style.cursor = "pointer";
	function a_mouseover() {
		document.getElementById("r-a").style.opacity="0.9";
		document.getElementById("l-a").style.opacity="0.9";		
	}
	function a_mouseout() {
		document.getElementById("r-a").style.opacity="0";
		document.getElementById("l-a").style.opacity="0";		
	}
	document.getElementById("div-2").addEventListener("mouseover",a_mouseover);
	document.getElementById("div-2").addEventListener("mouseout",a_mouseout);

	function ra_mouseover() {
		document.getElementById("r-a").style.background="#143975";
	}
	function ra_mouseout() {
		document.getElementById("r-a").style.background="#414141";
	}
	document.getElementById("r-a").addEventListener("mouseover",ra_mouseover);
	document.getElementById("r-a").addEventListener("mouseout",ra_mouseout);

	function la_mouseover() {
		document.getElementById("l-a").style.background="#143975";
	}
	function la_mouseout() {
		document.getElementById("l-a").style.background="#414141";
	}
	document.getElementById("l-a").addEventListener("mouseover",la_mouseover);
	document.getElementById("l-a").addEventListener("mouseout",la_mouseout);
}
hover2();*/

/*function hover3() {
	function fi_mouseover() {
		document.getElementById("f-insta").style.filter = "brightness(65%)";		
	}
	function fi_mouseout() {
		document.getElementById("f-insta").style.filter = "brightness(100%)";
	}
	document.getElementById("f-insta").addEventListener("mouseover",fi_mouseover);
	document.getElementById("f-insta").addEventListener("mouseout",fi_mouseout);

	function ff_mouseover() {
		document.getElementById("f-fb").style.filter = "brightness(65%)";		
	}
	function ff_mouseout() {
		document.getElementById("f-fb").style.filter = "brightness(100%)";
	}
	document.getElementById("f-fb").addEventListener("mouseover",ff_mouseover);
	document.getElementById("f-fb").addEventListener("mouseout",ff_mouseout);

	function fy_mouseover() {
		document.getElementById("f-yt").style.filter = "brightness(65%)";		
	}
	function fy_mouseout() {
		document.getElementById("f-yt").style.filter = "brightness(100%)";
	}
	document.getElementById("f-yt").addEventListener("mouseover",fy_mouseover);
	document.getElementById("f-yt").addEventListener("mouseout",fy_mouseout);

	function ft_mouseover() {
		document.getElementById("f-tw").style.filter = "brightness(65%)";		
	}
	function ft_mouseout() {
		document.getElementById("f-tw").style.filter = "brightness(100%)";
	}
	document.getElementById("f-tw").addEventListener("mouseover",ft_mouseover);
	document.getElementById("f-tw").addEventListener("mouseout",ft_mouseout);

	function feedback_mouseover() {
		document.getElementById("feedback").style.color = "#BDBDBD";		
	}
	function feedback_mouseout() {
		document.getElementById("feedback").style.color = "#FFFFFF";
	}
	document.getElementById("feedback").addEventListener("mouseover",feedback_mouseover);
	document.getElementById("feedback").addEventListener("mouseout",feedback_mouseout);

	function contact_mouseover() {
		document.getElementById("contact").style.color = "#BDBDBD";		
	}
	function contact_mouseout() {
		document.getElementById("contact").style.color = "#FFFFFF";
	}
	document.getElementById("contact").addEventListener("mouseover",contact_mouseover);
	document.getElementById("contact").addEventListener("mouseout",contact_mouseout);

	function follow_mouseover() {
		document.getElementById("follow").style.color = "#BDBDBD";		
	}
	function follow_mouseout() {
		document.getElementById("follow").style.color = "#FFFFFF";
	}
	document.getElementById("follow").addEventListener("mouseover",follow_mouseover);
	document.getElementById("follow").addEventListener("mouseout",follow_mouseout);
}
hover3();*/