const int = document.getElementById("count");
const remove = document.getElementById("btn1");
const reset = document.getElementById("btn2");
const add = document.getElementById("btn3");
let integer=0;
remove.addEventListener('click',function ()
{   integer-=1;
    count.innerHTML=integer;
});
add.addEventListener('click',function () 
{   integer+=1;
    int.innerHTML=integer;
});
reset.addEventListener('click',function () 
{     integer=0;
     int.innerHTML=integer;

});