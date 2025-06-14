let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset     = document.getElementById("reset");
let counterValue = document.getElementById("counterValue")

let counter = 0;

function counterUpdate()
{
    counterValue.innerText = counter;
}

increment.addEventListener("click", ()=>{
    counter++;
    counterUpdate();
})
decrement.addEventListener("click", ()=>{
    counter--;
    counterUpdate();
})
reset.addEventListener("click", ()=>{
    counter = 0;
    counterUpdate();
})