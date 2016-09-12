var mems;
document.querySelector("#min").onchange=function() {
  document.querySelector("#max").min=document.querySelector("#min").value;
  if (document.querySelector("#max").value<document.querySelector("#min").value){
    document.querySelector("#max").value=document.querySelector("#min").value;
  }
  if (document.querySelector("#min").value==""||document.querySelector("#min").value<0){
    document.querySelector("#min").value=0;
  }
  calc();
};
document.querySelector("#max").onchange=function() {
  document.querySelector("#min").max=document.querySelector("#max").value;
  if (document.querySelector("#min").value>document.querySelector("#max").value){
    document.querySelector("#min").value=document.querySelector("#max").value;
  }
  if (document.querySelector("#max").value==""||document.querySelector("#max").value<0){
    document.querySelector("#max").value=document.querySelector("#min").value;
  }
  calc();
};
function calc() {
  mems=[];
  document.querySelector("ul").innerHTML="";
  for(var i=document.querySelector("#min").value;i<document.querySelector("#max").value+1;i++){
  	if(testForMEMS(i)){
  		mems.push(i);
  		document.querySelector("ul").innerHTML+="<li>"+i+"</li>";
  	}
  }
  console.log(mems);
}
function testForMEMS(n){
	var t;
	while (n.toString().length>1) {
		t=0;
		for(var j=0;j<n.toString().length;j++){
			t+=Number(n.toString()[j])*Number(n.toString()[j]);
		}
		n=t;
	}
	if(n==1){/* ||n==7 */
		return true;
	}else{
		return false;
	}
}
