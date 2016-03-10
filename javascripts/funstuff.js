/**
 * Created by ellenholland on 3/8/16.
 */
//Fun
var flag = 1;
function f1() {
    alert("Teehee")
}

//document.getElementById('Bn').onclick = function(){
//}

function f2() {
    alert("I know you actually do love me. Also good job catching the button!");
}
function f() {

    Bn.style.top = (Math.random()*400)+1;
    if(flag ==1){
        Bn.style.right= (Math.random()*20)+1;
        flag =2;

    }
    else if(flag ==2 ){
        Bn.style.left = (Math.random()*20)+1;
        flag =1;

    }
}


// //Game JS
//
//function startGame() {
//    myGameArea.start();
//}
//
//var myGameArea = {
//    canvas : document.createElement("canvas"),
//    start : function() {
//        this.canvas.width = 480;
//        this.canvas.height = 270;
//        this.context = this.canvas.getContext("2d");
//        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//    }
//}