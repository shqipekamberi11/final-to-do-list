const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        saveData();
    }
}, false);


const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("change", filterTodo);

function filterTodo(e) {
    console.log("Filtering tasks...");
    console.log("Selected option:", e.target.value);

    const todos = listContainer.childNodes;
    todos.forEach(function(todo) {
        console.log("Todo:", todo.textContent);
        switch(e.target.value) {
            case "all": 
                todo.style.display = "flex";
                break;
            case "completed": 
                if(todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "active":
                if(!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
