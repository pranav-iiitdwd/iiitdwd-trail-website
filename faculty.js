/*function hover1 () {
	function home_mouseover() { 
		document.getElementById("home").style.backgroundColor= "#5C5C5C";
		document.getElementById("home").style.color= "#FFFFFF";
	}
	function home_mouseout() { 
		document.getElementById("home").style.backgroundColor= "#FFFFFF"; 
		document.getElementById("home").style.color= "#000000";
	}
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
	document.getElementById("faculty").style.backgroundColor= "#143975";
	document.getElementById("faculty").style.color= "#FFFFFF";
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

function hover4() {
	var o=0.0,o2="",a;
	var o3=0.0,o4="",a2;

	function div4_op() {
		console.log(o);
		o=o+0.01;
		o2=""+o;
		document.getElementById("img-f1").style.opacity = o2;
		document.getElementById("c-f1").style.opacity = o2;
		if(o>=1) { document.getElementById("div-4").removeEventListener("mouseover",div4_mouseover); clearInterval(a); }
	}
	function div4_mouseover() { console.log("1");	a=setInterval(div4_op,10); }
	//document.getElementById("div-4").addEventListener("mouseover",div4_mouseover);
	div4_mouseover();

	function div6_op() {
		console.log(o);
		o3=o3+0.01;
		o4=""+o3;
		document.getElementById("img-f2").style.opacity = o4;
		document.getElementById("c-f2").style.opacity = o4;
		if(o3>=1) { document.getElementById("div-6").removeEventListener("mouseover",div6_mouseover); clearInterval(a2); }
	}
	function div6_mouseover() { console.log("1");	a2=setInterval(div6_op,10); }
	//document.getElementById("div-6").addEventListener("mouseover",div6_mouseover);	
	div6_mouseover();
}
setTimeout(hover4,200);