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



//body {margin:0;}
//ul.topnav {
//  list-style-type: none;
//  margin: 0;
//  padding: 0;
//  overflow: hidden;
//  background-color: #333;
//}
//
//ul.topnav li {float: left;}
//
//ul.topnav li a {
//  display: inline-block;
//  color: #f2f2f2;
//  text-align: center;
//  padding: 14px 16px;
//  text-decoration: none;
//  transition: 0.3s;
//  font-size: 17px;
//}
//
//ul.topnav li a:hover {background-color: #111;}
//
//ul.topnav li.icon {display: none;}
//
//@media screen and (max-width:680px) {
//  ul.topnav li:not(:first-child) {display: none;}
//  ul.topnav li.icon {
//    float: right;
//    display: inline-block;
//  }
//}
//
//@media screen and (max-width:680px) {
//  ul.topnav.responsive {position: relative;}
//  ul.topnav.responsive li.icon {
//    position: absolute;
//    right: 0;
//    top: 0;
//  }
//  ul.topnav.responsive li {
//    float: none;
//    display: inline;
//  }
//  ul.topnav.responsive li a {
//    display: block;
//    text-align: left;
//  }
//}
//</style>
//</head>
//<body>
//
//<ul class="topnav">
//    <li><a class="active" href="#home">Home</a></li>
//<li><a href="#news">News</a></li>
//<li><a href="#contact">Contact</a></li>
//<li><a href="#about">About</a></li>
//<li class="icon">
//    <a href="javascript:void(0);" style="font-size:15px;" onclick="myFunction()">☰</a>
//</li>
//</ul>
//
//<div style="padding-left:16px">
//    <h2>Responsive Topnav Example</h2>
//<p>Resize the browser window to see how it works.</p>
//</div>
//
//<script>
//function myFunction() {
//  document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
//}
//</script>


