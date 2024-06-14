let taskList = []
let idCounter = 1;

let addTaskButton = document.getElementById('add-task-button')
addTaskButton.onclick = runFunc

let taskDiv = document.createElement('div')
taskDiv.classList.add('container')

function runFunc(){
    let descriptionInput = document.getElementById('task-input')
    if(descriptionInput.value == '' || descriptionInput.value == ' '){
        console.log('invalid description')
        return
    }
    let description = descriptionInput.value

    let priorityInput = document.getElementById('select-priority')
    let priority = priorityInput.value

    addTask(description,priority)
}
function addTask(description,priority){
    taskList.push(new task(genarateId(),description,priority,1))
}

function genarateId(){
    let id = idCounter
    idCounter++;//let id = Math.floor(Math.random() * 1000)
    return id
}