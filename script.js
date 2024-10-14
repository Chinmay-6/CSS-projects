function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding task
}

function deleteTask(task) {
    task.parentElement.remove();
}
