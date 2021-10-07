const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //(목표 문자열 길이, string 앞쪽에 0추가)
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText =`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);//실시간으로 보임