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
  var how;
  document.querySelector("ul").innerHTML="";
  for(var i=Number(document.querySelector("#min").value);i<Number(document.querySelector("#max").value)+1;i++){
    how=testForMEMS(i);
    if(how!=""){
      mems.push(i);
      document.querySelector("ul").innerHTML+="<li><div class='how'>"+how+"</div>"+i+"</li>";
    }
  }
  console.log(mems);
}
function testForMEMS(n){
  var t,wow="";
  while (n.toString().length>1) {
    t=0;
    for(var j=0;j<n.toString().length;j++){
      t+=Number(n.toString()[j])*Number(n.toString()[j]);
      wow+=n.toString()[j]+"<sup>2</sup>+";
    }
    n=t;
    wow=wow.slice(0,wow.length-1);
    wow+="=<b>"+n+"</b><br>";
  }
  if(n==1||n==7){
    return wow;
  }else{
    return "";
  }
}
