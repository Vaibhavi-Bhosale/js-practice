const btn = document.getElementById("btn")

const colors = ["#ff4d4d", "#4d79ff", "#47d147", "#ffcc00", "#ff66cc"]

function randomColor(){
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
     document.body.style.backgroundColor = randomColor;

     btn.style.color = randomColor
}

btn.addEventListener("click", ()=>{
     randomColor()
})