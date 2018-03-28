var num=0;


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
var pt=document.getElementById("screenName");

pt.onkeydown=function(e){
	var keyCode = e.keyCode;
	document.getElementById("screenName").value="";   
	return false;
}

function putin(num){
	document.getElementById("screenName").value+=num;
	var numdel=document.getElementById("screenName").value;
	console.log(numdel);
	window.data=numdel;
	return data;	
}

data=0;

function delit(){
	var numdeling=window.data;
	console.log(numdeling);
	var newnum=Math.floor(numdeling/10);
	if(newnum==0){
		document.getElementById("screenName").value="";
		window.data=0;
	}else{
	console.log(newnum);
	document.getElementById("screenName").value="";
	document.getElementById("screenName").value=newnum;
	window.data=newnum;
	}
	return data;
}

tmpe=0;



function confirm(){
	/*var tmpe=data;*/
	var res=data-tmpe;
	tmpe=data;
	
	console.log(res);
	if(res!=1){
 		alert("不连续，请重新开始");
 		document.getElementById("screenName").value="";
 		tmpe=0;
 		// document.getElementById("screennote").value=tmpe;
 	}else{
 		console.log("连续可继续");
 		document.getElementById("screenName").value="";
 		// document.getElementById("screennote").value=tmpe;
 	}
 	
 }

var c=0;
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
//setTimeout(表达式,延时时间)在执行时,是在载入后延迟指定时间后,去执行一次表达式
//而setInterval(表达式,交互时间)则不一样,它从载入后,每隔指定的时间就执行一次表达式 
function Count(){
	if(c<10){
	c=c+1;	
	document.getElementById('time-text').value=c;
	console.log(c);
}else{
	c=0;
	document.getElementById('time-text').value=c;
	clearInterval(t);
	alert("时间到")
}
}

function timedCount(){
	t=setInterval("Count()",1000);
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


