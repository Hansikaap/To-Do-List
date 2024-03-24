function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var listItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";
      listItem.appendChild(checkbox);
      listItem.appendChild(document.createTextNode(taskText));
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }
  
  function showPriorityTasks() {
    var priorityTasks = document.querySelectorAll(".priority-star");
  
    priorityTasks.forEach(function(task) {
      task.parentNode.style.display = "block";
    });
  
    var regularTasks = document.querySelectorAll("li:not(.priority-star)");
  
    regularTasks.forEach(function(task) {
      task.parentNode.style.display = "none";
    });
  }
  
  document.addEventListener("click", function(event) {
    var target = event.target;
    if (target.classList.contains("task-checkbox")) {
      var listItem = target.parentNode;
      if (target.checked) {
        listItem.classList.add("priority-star");
      } else {
        listItem.classList.remove("priority-star");
      }
    }
  });
  