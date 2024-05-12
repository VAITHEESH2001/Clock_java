// clock js

function timeset(){
    var hour= document.getElementById("hour");
var minute= document.getElementById("minute");
var second = document.getElementById("second");
    const date =new Date();
        const HH = date.getHours()%12;
      const MM = date.getMinutes();
      const SS = date.getSeconds();
     const Hhand = (HH * 30) + (MM * 0.5);
    
    const Mhand =(MM * 6) + (SS * 0.1);
   
    const Shand =(SS * 6);
   
    hour.style.transform = "rotate(" + Hhand + "deg)"; 
    minute.style.transform = "rotate(" + Mhand + "deg)"; 
    second.style.transform = "rotate(" + Shand + "deg)";
 
}
setInterval(timeset ,1000);
timeset();


