const colorCodecon = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const scorecontainer = document.getElementById("score");
let randomColor = null; // corrected initialization
let score = 0;

function generate(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColor() {
    const red = generate(0, 255);
    const blue = generate(0, 255);
    const green = generate(0, 255);

    return `rgb(${red}, ${blue}, ${green})`;
}

function increment() {
    score += 1;
    scorecontainer.innerText = score;
}

function validateresult(el) {
   
    const selectedcolor = el.target.style.backgroundColor;
    console.log(selectedcolor);
    console.log(randomColor)
    if (selectedcolor === randomColor) {
        console.log("sahi haii");
        increment();
    } else {
        score = 0;
    }

    window.localStorage.setItem("score", score);
    startgame();
}

function startgame() {
    score = Number(window.localStorage.getItem("score")) || 0; // parse score from localStorage
    scorecontainer.innerText = score;
    optionContainer.innerHTML = "";
    randomColor = generateRandomColor();
    console.log()
    colorCodecon.innerText = randomColor;
    const ansIndex = generate(0, 5);
    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.addEventListener("click", validateresult);
        div.style.backgroundColor = i === ansIndex ? randomColor : generateRandomColor();
        optionContainer.append(div);
    }
}

window.addEventListener("load", () => startgame()); // call startgame function
