const form = document.getElementById("form")
const status = document.getElementById("status")
const result = document.getElementById("result")
const msg = document.getElementById("msg")

function bmiCalculator(height, weight){
    let BMI = weight / ((height/100) ** 2);

    let message = "";
    if (BMI < 18.5){
        message = "Underweight";
        msg.style.color = "red";
    } 
    else if (BMI < 25){
        message = "Normal";
         msg.style.color = "green";
    }
    else{
        message = "Overweight";
        msg.style.color = "red";
    }

    result.innerText = `Your BMI : ${BMI.toFixed(2)}`
    msg.innerText = `Your ${message}`
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height=== "" || weight === "")
    {
        status.innerText = "Fill the Value First";
    }
    else if(height <= 0 || weight <= 0)
    {
        status.innerText = "Fill the right values";
    }
    else
    {
        bmiCalculator(Number(height), Number(weight));
        status.innerText = "";
    }
})