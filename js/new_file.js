
var num = 0;


// var bt=document.getElementsByClassName("button");

//  var i;
//  for (i = 0; i < bt.length; i++) {
// 	console.log(i);
//  bt[i].onmousedown=function(e){
// 	e = e || window.event;
// 	console.log("down");
// 	var cs = getComputedStyle(this, null);
// 	cs.getPropertyValue('background-color')="red";
// }
// }


// pt.onkeydown=function(e){
// 	var keyCode = e.keyCode;
// 	document.getElementById("screenName").value="";   
// 	return false;
// }


//var pt=document.getElementById("screenName");
var pt = $("#screen_name");

$(document).ready(function(){
	
});

//$(".row > button").addEventListener("click", putin(this.value));
var button_team = document.getElementsByClassName("button");
for(i=0;i<button_team.length-1;i++){
	//console.log(button_team[i]);
	button_team[i].addEventListener("click",aputin);
}

document.getElementById("button-last").addEventListener("click",confirm);

function aputin(){
	return putin(this.value);
}

function putin(num) {
	var $screen_name = $("#screen_name");
	$("#screen_name").val($screen_name.val()+num);
	//$("#screen_name").val(num);
	//document.getElementById("screenname").value += num;
	var numdel = $("#screen_name").val();
	//var numdel = document.getElementById("screenname").value;
	console.log(numdel);
	window.data = numdel;
	return data;	
}

data = 0;

function delit() {
	var numdeling = window.data;
	console.log(numdeling);
	var newnum = Math.floor(numdeling/10);
	if (newnum == 0){
		$("#screen_name").val() = "";
		window.data = 0;
	}
	else {
	    console.log(newnum);
	    $("#screen_name").val() = "";
	    $("#screen_name").val() = newnum;
	    window.data = newnum;
	}
	return data;
}

tmpe = 0;

function confirm() {
	var res = data - tmpe;
	tmpe = data;
	console.log(res);
	if (res != 1){
		 alert("不连续，请重新开始");
		 $("#screen_name").val(" ");
 		//document.getElementById("screenname").value = "";
 		tmpe = 0;
	 }
	 else {
		 console.log("连续可继续");
		 $("#screen_name").val(" ");
 		//document.getElementById("screenname").value = "";
 	}
 }

var c = 0;
var t;
// function timedCount()
// {
// 	if(c<=10){
// 	document.getElementById('time-text').value=c;
//  console.log(c);
// 	c=c+1;
// 	t=setTimeout("timedCount()",1000);	
// 	}else{
// 		clearTimeout(t);
// 		alert("时间到")
// 	}
// }
// setinterval替代 settimeout   
// setTimeout(表达式,延时时间)在执行时,是在载入后延迟指定时间后,去执行一次表达式
// 而setInterval(表达式,交互时间)则不一样,它从载入后,每隔指定的时间就执行一次表达式

function Count() {
	if (c<10){
	c = c+1;
	$("#time-text").val(c);
	//document.getElementById('time-text').value = c;
	console.log(c);
}
else {
	c=0;
	$("#time-text").val(c);
	//document.getElementById('time-text').value = c;
	clearInterval(t);
	alert("时间到")
}
}

function timedCount() {
	t = setInterval("Count()",1000);
	// function Count(){
	// 	if(c<=10){
	// 	document.getElementById('time-text').value=c;
	// 	c=c+1;
	// 	console.log(c);
	// }else{
	// 	//c=0;
	// 	//document.getElementById('time-text').value=c;
	// 	clearInterval(t);
	// 	alert("时间到")
	// }
	// }
}


