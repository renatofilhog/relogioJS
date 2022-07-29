let segEl = document.querySelector(".p.p_s");
let minEl = document.querySelector(".p.p_m");
let hrsEl = document.querySelector(".p.p_h");
let digitalEl = document.querySelector(".digital");
function updateClock() {
    let now = new Date();
    let seg = fixZero(now.getSeconds());
    let min = fixZero(now.getMinutes());
    let hrs = fixZero(now.getHours());

    digitalEl.innerHTML = `${hrs}:${min}:${seg}`;

    let segElPos = (360 / 60)*parseInt(seg)-90;
    let minElPos = (360 / 60)*parseInt(min)-90;
    let hrsElPos = (360 / 12)*parseInt(hrs)-90;

    segEl.style.transform = `rotate(${segElPos}deg)`;
    minEl.style.transform = `rotate(${minElPos}deg)`;
    hrsEl.style.transform = `rotate(${hrsElPos}deg)`;
}
function fixZero(time) {
    return time<10 ? `0${time}` : time;
}

setInterval(updateClock,1000);
updateClock();