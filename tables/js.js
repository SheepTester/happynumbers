(function() {
  var cols=0;
  function update() {
    while (Number(window.getComputedStyle(document.body).height.slice(0,-2))<window.innerHeight+document.body.scrollTop) {
      document.body.appendChild(document.createElement('row'));
    }
    while (Number(window.getComputedStyle(document.body).width.slice(0,-2))<window.innerWidth+document.body.scrollLeft) {
      cols++;
      var s=document.querySelectorAll('row');
      for (var i=0;i<s.length;i++) {
        var t=document.createElement('box');
        t.innerHTML=(i+1)*cols;
        s[i].appendChild(t);
      }
    }
  }
  window.onscroll=update;
  window.onresize=update;
  update();
}());
