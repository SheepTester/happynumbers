(function() {
  function calc() {
    var a=Number(document.querySelector('#a').value),
    b=Number(document.querySelector('#b').value),
    c=Number(document.querySelector('#c').value),
    vx,vy;
    document.querySelector('#union').innerHTML=a>0?'∪ (opens upwards)':a<0?'∩ (opens downwards)':'a line';
    document.querySelector('#maxin').innerHTML=a>0?'minimum':a<0?'maximum':'nonexistent';
    document.querySelector('#than').innerHTML=a>0?'≥':a<0?'≤':'=';
    vx=(-b)/(2*a);
    document.querySelector('#x').innerHTML=vx;
    document.querySelector('#vx').innerHTML=vx;
    vy=a*vx*vx+b*vx+c;
    document.querySelector('#y').innerHTML=vy;
    document.querySelector('#vy').innerHTML=vy;
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
