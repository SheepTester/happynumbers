document.querySelector("#min").onchange=function() {
  document.querySelector("#max").min=document.querySelector("#min").value;
};
document.querySelector("#max").onchange=function() {
  document.querySelector("#min").max=document.querySelector("#max").value;
};
