const taskList = [
    {
      id: 1,
      description: "Dar Comida A los Peces",
      complete: false,
    },
    {
      id: 2,
      description: "Ir al Gym a matar",
      complete: false,
    },
    {
      id: 3,
      description: "Dormir 8 horas",
      complete: false,
    },
  ];
  
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskContainer = document.getElementById("task-container");
  const totalTask = document.getElementById("total-task");
  const completeTask = document.getElementById("complete-task");
  
  function taskRender(tasksArr, container) {
    let html = "";
    tasksArr.forEach((task) => {
      html += `
        <tr>
          <td>${task.id}</td>
          <td>${task.description}</td>
          <td><input id="check-${
            task.id
          }" class="checkbox-status" type="checkbox" name="checkbox"
          ${task.complete ? "checked" : ""} 
            onclick="changeStatus(${task.id})"</td>
          <td><i class="fa-solid fa-trash" onclick="deleteTask(${
            task.id
          })"></i></td>
        </tr>`;
    });
    container.innerHTML = html;
    totalTask.innerText = tasksArr.length;
  }
 
  function deleteTask(taskId) {
    const taskIndex = taskList.findIndex((task) => task.id === taskId);
    taskList.splice(taskIndex, 1);
    taskRender(taskList, taskContainer);
    totalTask.innerText = taskList.length;
  }
  
  let newId = taskList[taskList.length - 1].id;
  
  function changeStatus(taskId) {
    const task = taskList.find((task) => task.id === taskId);
    task.complete = task.complete ? false : true;
    taskRender(taskList, taskContainer);
    completeTask.innerText = taskList.filter((task) => task.complete).length;
  }
  
  addTaskBtn.addEventListener("click", () => {
    const newTask = {
      id: (newId += 1),
      description: taskInput.value,
      complete: false,
    };
    taskList.push(newTask);
    taskInput.value = "";
    taskRender(taskList, taskContainer);
    console.table(taskList);
    console.log(taskList.length);
  });
  

  taskRender(taskList, taskContainer);