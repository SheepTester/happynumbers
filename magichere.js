var mems;
calc();
document.querySelector("#min").onchange=document.querySelector("#min").onkeyup=function() {
  document.querySelector("#max").min=document.querySelector("#min").value;
  document.querySelector("#resizer").innerHTML=document.querySelector("#min").value;
  document.querySelector("#min").style.width=(document.querySelector("#resizer").clientWidth+16)+"px";
  check(document.querySelector("#min").value,document.querySelector("#max").value);
};
document.querySelector("#max").onchange=document.querySelector("#min").onkeyup=function() {
  document.querySelector("#min").max=document.querySelector("#max").value;
  document.querySelector("#resizer").innerHTML=document.querySelector("#max").value;
  document.querySelector("#max").style.width=(document.querySelector("#resizer").clientWidth+16)+"px";
  check(document.querySelector("#min").value,document.querySelector("#max").value);
};
document.querySelector("#btn").onclick=function(){
  calc();
}
function check(min,max) {
  if (Number(min)>Number(max)){
    document.querySelector("#min").value=document.querySelector("#max").value;
  }
  if (Number(min)==""||Number(min)<0){
    document.querySelector("#min").value=0;
  }
  if (Number(max)<Number(min)||Number(max)==""){
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
}
function testForMEMS(n){
  var t,wow="";
  while (n.toString().length>1) {
    t=0;
    var jiggles="";
    for(var j=0;j<n.toString().length;j++){
      t+=Math.pow(Number(n.toString()[j]),2);
      wow+=n.toString()[j]+"<sup>2</sup>+";
      jiggles+=Math.pow(Number(n.toString()[j]),2)+"+";
    }
    n=t;
    wow=wow.slice(0,wow.length-1);
    jiggles=jiggles.slice(0,jiggles.length-1);
    wow+="="+jiggles+"=<b>"+n+"</b><br>";
  }
  if(n==1||n==7){
    return wow;
  }else{
    return "";
  }
}
