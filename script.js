const body = document.querySelector("body")
const moodBtn = document.querySelector(".mood");
const headerbg = document.querySelector(".header")

let color = "light"


function mood() {

    if (color == "light") {
        body.classList.add("darkmood")
        body.classList.remove("lightmood")
        moodBtn.style.backgroundImage = "url('assets/images/icon-sun.svg')"
        color = "dark"
        headerbg.style.background = "linear-gradient(180deg, #8490b6ff 0%, #5b699dff 100%)"
        body.classList.toggle("dark");

    }
    else if (color == "dark") {
        body.classList.add("lightmood")
        body.classList.remove("darkmood")
        color = "light"
        moodBtn.style.backgroundImage = "url('assets/images/icon-moon.svg')"
        headerbg.style.background = "linear-gradient(180deg, #EEF8F9 0%, #EEF8F9"
        body.classList.toggle("dark");
    }
}

moodBtn.addEventListener("click", () => {
    mood()
})


