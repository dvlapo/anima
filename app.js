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

function formatMinute(min) {
    return min.toString().length < 2 ? `0${min}` : min;
}

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = formatMinute(minutes);
}
getTime();
setInterval(getTime, 60000);

window.addEventListener("scroll", scaleDownTittle);
