const tittle = document.querySelector(".tittle");
const footer = document.querySelector("footer");

function scaleDownTittle() {
    const top = footer.getBoundingClientRect().top;
    const percentReveal = (top / window.innerHeight) * 100;

    if (percentReveal <= 30) {
        tittle.classList.add("scaledown");
        setTimeout(() => {
            tittle.classList.add("bounce");
        }, 900);
    } else {
        tittle.classList.remove("scaledown");
        tittle.classList.remove("bounce");
    }
}

function formatTime(hr, min) {
    const hour = hr.toString().length < 2 ? `0${hr}` : hr;
    const minute = min.toString().length < 2 ? `0${min}` : min;

    return `${hour}:${minute}`;
}

function renderTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    document.querySelector("#time").innerHTML = formatTime(hours, minutes);
}
renderTime();
setInterval(renderTime, 60000);

window.addEventListener("scroll", scaleDownTittle);
