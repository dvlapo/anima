const tittle = document.querySelector(".tittle");
const footer = document.querySelector("footer");

function scaleDownTittle() {
    const top = footer.getBoundingClientRect().top;
    const percentReveal = (top / window.innerHeight) * 100;

    if (percentReveal <= 40) {
        tittle.classList.add("scaledown");
        setTimeout(() => {
            tittle.classList.add("add-bounce");
        }, 3000);
    } else {
        tittle.classList.remove("scaledown");
        tittle.classList.remove("add-bounce");
    }
}

window.addEventListener("scroll", scaleDownTittle);
