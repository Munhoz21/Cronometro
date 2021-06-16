"use strict"


var min=0;
var seg=0;
var hun=0;


var cron;




function start(){
    cron=setInterval(()=>{
        timer();
    }, 1000)


   
}

function pause(){
    clearInterval(cron);
}

function stop(){
    clearInterval(cron);
     min=0;
     seg=0;
     hun=0;
    document.getElementById('screen').innerHTML='00:00:00'
}




function timer(){
    hun ++;

    if(hun == 60){
        hun=0;
        seg++
    if(seg==60){
        seg=0;
        min ++;
        }

    }

var format = (min < 10 ? '0' + min:min) + ':' + ( seg< 10 ? '0' + seg:seg) + ':' + (hun<10 ? '0' + hun:hun);
document.getElementById('screen').innerHTML=format;


return format;

}
