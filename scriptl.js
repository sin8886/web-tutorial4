// 获取页面元素
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// 从Local Storage中获取任务
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 显示任务列表
function displayTasks() {
  taskList.innerHTML = ""; // 清空任务列表
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">删除</button>
        `;
    taskList.appendChild(li);
  });
}

// 添加任务
function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task); // 添加任务到数组
    localStorage.setItem("tasks", JSON.stringify(tasks)); // 保存到Local Storage
    taskInput.value = ""; // 清空输入框
    displayTasks(); // 刷新任务列表
  }
}

// 删除任务
function deleteTask(index) {
  tasks.splice(index, 1); // 从数组中删除任务
  localStorage.setItem("tasks", JSON.stringify(tasks)); // 更新Local Storage
  displayTasks(); // 刷新任务列表
}

// 事件监听器：点击按钮时添加任务
addTaskBtn.addEventListener("click", addTask);

// 页面加载时显示任务列表
document.addEventListener("DOMContentLoaded", displayTasks);
