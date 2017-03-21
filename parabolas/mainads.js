(function() {
  function calc() {
    var a=Number(document.querySelector('#a').value),
    b=Number(document.querySelector('#b').value),
    c=Number(document.querySelector('#c').value),
    vx,vy,
    dis;
    document.querySelector('#union').innerHTML=a>0?'∪ (opens upwards)':a<0?'∩ (opens downwards)':'a line';
    document.querySelector('#maxin').innerHTML=a>0?'minimum':a<0?'maximum':'nonexistent';
    document.querySelector('#than').innerHTML=a>0?'≥':a<0?'≤':'=';
    vx=(-b)/(2*a);
    document.querySelector('#x').innerHTML=vx;
    document.querySelector('#vx').innerHTML=vx;
    vy=a*vx*vx+b*vx+c;
    document.querySelector('#y').innerHTML=vy;
    document.querySelector('#vy').innerHTML=vy;
    dis=b*b-4*a*c;
    document.querySelector('#ints').innerHTML=(dis>0?'2':(dis<0?'0':'1'));
    if (dis!==0) document.querySelector('#intplural').innerHTML='s';
    else {
      document.querySelector('#intplural').innerHTML='';
      document.querySelector('#xints').innerHTML=`(${-b/2/a},0)`;
    }
    if (dis>0) {
      var xint1,xint2;
      xint1=(-b+Math.sqrt(dis))/(2*a);
      xint2=(-b-Math.sqrt(dis))/(2*a);
      document.querySelector('#xints').innerHTML=`(${xint1},0) and (${xint2},0)`;
    }
    document.querySelector('#yint').innerHTML=c;
  }
  var s=document.querySelectorAll('input[type=number]');
  for (var i=0;i<s.length;i++) (s[i].oninput=e=>{e.target.style.width=(SHEEP.textwidth(e.target,e.target.value)+10)+'px';calc();})({target:s[i]});
  var colours='9C27B0.673AB7.E91E63.FF5722.f44336'.split('.');
  function merp() {
    var colour='#'+colours[Math.floor(Math.random()*colours.length)];
    document.querySelector('#colour').innerHTML=`body {background-color: ${colour};} lab {color: ${colour};}`;
    setTimeout(merp,Math.floor(Math.random()*5000+2000));
  }
  merp();
}());
