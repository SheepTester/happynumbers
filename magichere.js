var mems;
document.querySelector("#min").onchange=document.querySelector("#min").onkeyup=function() {
  document.querySelector("#max").min=document.querySelector("#min").value;
  check();
  calc();
};
document.querySelector("#max").onchange=document.querySelector("#min").onkeyup=function() {
  document.querySelector("#min").max=document.querySelector("#max").value;
  check();
  calc();
};
function check() {
  if (document.querySelector("#min").value>document.querySelector("#max").value){
    document.querySelector("#min").value=document.querySelector("#max").value;
  }
  if (document.querySelector("#min").value==""||document.querySelector("#min").value<0){
    document.querySelector("#min").value=0;
  }
  if (document.querySelector("#max").value<document.querySelector("#min").value||document.querySelector("#max").value==""){
    document.querySelector("#max").value=document.querySelector("#min").value;
  }
}
function calc() {
  mems=[];
  var abc="abcefghijklmnopqrstuvwxyz"; /* for pop-up demonstration purposes */
  document.querySelector("ul").innerHTML="";
  for(var i=Number(document.querySelector("#min").value);i<Number(document.querySelector("#max").value)+1;i++){
    if(testForMEMS(i)){
      mems.push(i);
      document.querySelector("ul").innerHTML+="<li>"+i+"<div class='how'>"+abc+"</div></li>";
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
  if(n==1||n==7){
    return true;
  }else{
    return false;
  }
}
