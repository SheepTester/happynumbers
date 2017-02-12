(function() {
  var n=0,primes=[2];
  function makeTens() {
    while (document.body.clientHeight<window.innerHeight+document.body.scrollTop) {
      var s=document.createElement('tens');
      for (var i=0;i<10;i++) {
        n++;
        var t=document.createElement('one');
        t.innerHTML=n;
        if (n==2) {
          t.className='by2';
        } else if (n>2) {
          var j=primes[0],k=0;
          while (j<=Math.ceil(Math.sqrt(n))) { // even if it's divisible by a prime higher than its square root, it's going to have a counterpart on the low end
            if (n%j===0) { // it's divisible, so it's not prime
              k=-1;
              if (j>17) t.className='byPrime';
              else t.className='by'+j;
              break;
            } else { // isn't divisible, but let's keep going
              k++;
              j=primes[k];
            }
          }
          if (k!==-1) {
            t.className='prime';
            primes.push(n);
          }
        }
        s.appendChild(t);
      }
      document.body.appendChild(s);
    }
  }
  window.onscroll=makeTens;
  window.onresize=makeTens;
  makeTens();
  document.body.onclick=e=>{
    if (e.target.tagName==='ONE') {
      document.body.classList.add('info');
      document.querySelector('n').innerHTML=e.target.innerHTML;
      var n=Number(e.target.innerHTML);
      if (n===1) {
        document.querySelector('factor').innerHTML='1';
      } else {
        var factors=[];
        for (var i=1;i<=Math.round(Math.sqrt(n));i++) {
          if (n%i===0) {
            factors.push(i);
            if (n/i!==i) factors.push(n/i);
          }
        }
        factors.sort((a,b)=>a-b);
        document.querySelector('factor').innerHTML=factors.join(', ');
      }
      document.querySelector('prime').innerHTML=e.target.classList.contains('prime')?'yes':'no';
    }
    else if (e.target.tagName==='SHADOW') document.body.classList.remove('info');
  };
}());
