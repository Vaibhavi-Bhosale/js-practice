const password = document.getElementById("password");
const msg = document.getElementById("msg");

function passwordStrenthChecker(password_value)
{
    if(password_value === "")
    {
        msg.innerText = "Enter Password Plz !"
        msg.style.color = "blue";
    }
    else if(password_value.length < 6)
    {
        msg.innerText = "Passsword must be big than 6 letter"
        msg.style.color = "red";
    }
    else 
    {
        if((/[a-z]/.test(password_value) || /[A-Z]/.test(password_value)) && (/\d/.test(password_value)))
        {
            msg.innerText = "Srong"
            msg.style.color = "green";
        } 
        else if(/[a-z]/.test(password_value) && /[A-Z]/.test(password_value))
        {
            msg.innerText = "Medium"
            msg.style.color = "yellow";
        }
        else
        {
            msg.innerText = "Ezzyy Pizzyy"
            msg.style.color = "red";
        }

    }
}

password.addEventListener("input", (e)=>{
    let password_value = (e.target.value).trim();
    
    passwordStrenthChecker(password_value)
})