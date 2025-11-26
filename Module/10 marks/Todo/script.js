const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();
    if (task === "") return alert("Please enter a task!");

    addTask(task);
    saveTasks();
    taskInput.value = "";
});

function addTask(taskText, isCompleted = false) {
    const li = document.createElement("li");
    li.textContent = taskText;

    if (isCompleted) li.classList.add("completed");

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        taskList.removeChild(li);
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
    savedTasks.forEach(task => addTask(task.text, task.completed));
}
