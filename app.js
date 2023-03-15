const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const tasksList = document.querySelector("#tasks");
todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (todoInput.Value == ""){
        alert("Please enter a task....");
        return;
    }
const task = document.createElement("li");
task.innerText = todoInput.Value;
tasksList.appendChild(task);
todoInput.Value = "";
});