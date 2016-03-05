var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}

function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Fun
var flag = 1;
function f1() {
  alert("D'aww")
}

function f() {
  if(flag==1) {
    Bn.style.top=90;
    Bn.style.left=500;
    flag=2;
  }
  else if(flag==2) {
    Bn.style.top=90;
    Bn.style.left=50;
    flag=3;
  }
  else if(flag==3) {
    Bn.style.top=235;
    Bn.style.right=500;
    flag=1;
  }
}

//// URLS
//
//
//URL = new URL(aboutme, "")
//
//
//URL gamelan = new URL("http://www.gamelan.com/");
//URL gamelanNetwork = new URL(gamelan, "Gamelan.network.html");


