scr=document.getElementById("dis");
ac=document.getElementById("ac");
del=document.getElementById("del");
calc=document.getElementById("evaluate")
let keys=document.querySelectorAll(".key");
for(j of keys){
    let i=document.getElementById(j.id);
    i.addEventListener("click",function(){
        scr.value+=i.innerText;
    });
}
ac.onclick=sev1;
del.onclick=delet;
calc.onclick=c;
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
      delet();
    }
    else if(event.key=="Enter"){
        event.preventDefault();
        c();
    }
    else{
        for(j of keys){
            let i=document.getElementById(j.id);
            if(event.key==i.innerText){
                scr.value+=i.innerText;
            }
        }
    }
});
function c(){
      value=eval(scr.value);
      scr.value=value;
}
function sev1(){
    scr.value=null;
}
function delet(){
    if(scr.value<10){
         sev1();
    }
    else{
      scr.value=scr.value.slice(0,-1);
    }
}
