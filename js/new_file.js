var num=0;

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
 		document.getElementById("screennote").value=tmpe;
 	}else{
 		console.log("连续可继续");
 		document.getElementById("screenName").value="";
 		document.getElementById("screennote").value=tmpe;
 	}
 	
 }
