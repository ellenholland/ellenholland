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

    //    Bn.style.top=235;
    //    Bn.style.right=500;
    //    flag=1;
    //}
}

//left:(Math.random()*200)+"px",
//    top:(Math.random()*200)+"px",