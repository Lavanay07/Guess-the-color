const colorCodecon = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const scorecontainer = document.getElementById("score");
const messageContainer = document.getElementById("message-container"); 
let randomColor = null; // corrected initialization
let score = 0;
const a = ["Kya itna bura hai Lala","Lalalalala LALA","Rang de mrko ","Abe sale","lala ko pehchan na ski","Nopp","Racist ","Lala ka rang badal diye"];
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
        if(score === 2){
            messageContainer.innerText = "Bas kr ja BKL";
        }
        else{
        messageContainer.innerText = "Tu hi pehchan paya Lala ke asli rang";
        }
        increment();
      
    } else {
        let ind = generate(0,7);
        let mess = a[ind];
       
        
        messageContainer.innerText = `${mess}`;
        
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
