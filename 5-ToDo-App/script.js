const addTaskbtn = document.getElementById("addTask");
const ul = document.getElementById("ul")
const msg = document.getElementById("msg");
const allTask = []

const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

storedTasks.forEach(task=>{
    allTask.push(task)
    addTask();
})

function addTask() {
    let lastTask = allTask.pop();

    let textNode = document.createTextNode(lastTask)
    let p = document.createElement("p")
    p.appendChild(textNode)

    let li = document.createElement("li")
    li.appendChild(p)

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    li.appendChild(doneBtn)

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    li.appendChild(removeBtn)

    ul.appendChild(li);

    doneBtn.addEventListener("click", () => {
        handelDone(p)
    })

    removeBtn.addEventListener("click", (e) => {
        handelDelete(e, p);
    })

    allTask.push(p.innerText);
    localStorage.setItem("tasks", JSON.stringify(allTask));

}

 
function handelDone(p) {
    
    if (p.classList.contains("strike")) {
        p.classList.remove("strike");
    } else {
        p.classList.add("strike");
    }

}

function handelDelete(e, p) {
    (e.target.parentElement).remove();
    let index = allTask.indexOf(p.innerText)

    allTask.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(allTask));

    alert("Task is deleted")
}



addTaskbtn.addEventListener("click", (e) => {
    const taskInput = document.getElementById("taskInput").value;

    if(taskInput == "")
    {
        msg.innerText = "Enter Task First"
    }
    else{

        allTask.push(taskInput)
        addTask();
        msg.innerText="";
        
        document.getElementById("taskInput").value = ""
    }

    
})