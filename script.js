// step 1: find elements
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer = document.getElementById("todo-list")

let templateElement = document.getElementById ("list-item-template")
let template = templateElement.innerHTML
//step 2: write a function to implement the behaviour
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    let taskHTML = template.replace("<!--task_name-->", taskName);
    todoListContainer.insertAdjacentHTML("afterbegin", taskHTML);

}
function onTodoListClicked(event){
    let targetElement = event.toElement;
    console.log(targetElement);
}
//step 3: link element, function and event
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListClicked);