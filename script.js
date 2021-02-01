const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');




const Birthday= '29 dec 2021'
function countdown(){
    const birthDate=new Date(Birthday)
    const currentDate= new Date();
    
    const totalseconds=(birthDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;

    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    
  daysEl.innerHTML=days;
  hoursEl.innerHTML=hours;
   minsEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;
}
//initial call
countdown();
setInterval(countdown,1000);