
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function displayTasks() {
  taskList.innerHTML = ""; 
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">删除</button>
        `;
    taskList.appendChild(li);
  });
}


function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task); 
    localStorage.setItem("tasks", JSON.stringify(tasks)); // 保存到Local Storage
    taskInput.value = ""; 
    displayTasks(); 
  }
}


function deleteTask(index) {
  tasks.splice(index, 1); 
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
  displayTasks(); 
}


addTaskBtn.addEventListener("click", addTask);


document.addEventListener("DOMContentLoaded", displayTasks);
