let taskContainer = document.getElementById("taskContainer")
let taskList = []

if(localStorage.getItem("taskList")){
    taskList = JSON.parse(localStorage.getItem("taskList"))
}    

showAllTasks()

function createTask(){

    let taskNameInput = document.getElementById('nameInput')
    let taskPriorityInput = document.getElementById('priorityInput')
    let taskDeadlineInput = document.getElementById('deadlineInput')    
    if(!taskNameInput.value || !taskDeadlineInput.value || !taskPriorityInput.value)
    { 
        alert('fill out those fields');
        return
    }
    taskList.push(new task(taskNameInput.value, taskPriorityInput.value, taskDeadlineInput.value))
    taskNameInput.value = ""
    taskDeadlineInput.value = ""
    taskPriorityInput.value = ""

    localStorage.setItem("taskList", JSON.stringify(taskList))
    console.log()
    showAllTasks()
    toggleHidden()
}

function showAllTasks(){    
    taskContainer.innerHTML = ""
    taskList.forEach(task => {
        let taskDiv = document.createElement("div")   
        let checked = "";   
        if(task.done) {checked = "checked"}
        taskDiv.innerHTML =
        `
        <div class="todo">
            <div style="max-width: fit-content;" onclick="changeTaskStatus(this.parentElement);"><input class="pointer" type="checkbox" ${checked}></div>
            <div>${task.taskName}</div>
            <div>${task.taskPriority}</div>
            <div>${task.taskDeadline}</div>
            <div style="display: none;" id=impdata>${task.timestamp}</div>
        </div>
        `        

        taskContainer.appendChild(taskDiv)
    })
}
    
function sortBy(parent){

    if(parent.innerText === "Task"){
        let sortedTasklist = taskList.toSorted((a, b) => a.taskName.localeCompare(b.taskName))
        
        if(checkTwoArraysEqual(taskList, sortedTasklist, "taskName")){
            taskList.reverse((a, b) => a.taskName.localeCompare(b.taskName))
        }
        else{
            taskList.sort((a, b) => a.taskName.localeCompare(b.taskName))
        }
    }
    else if(parent.innerText === "Priority"){

        let lowPrioList = []
        let normalPrioList = []
        let highPrioList = []

        for(let i = 0; i < taskList.length; i++){
            
            console.log(
                taskList[i].taskPriority
            )
            
            if(taskList[i].taskPriority == "Low"){
                lowPrioList.push(taskList[i])
            }
            else if(taskList[i].taskPriority == "Normal"){
                normalPrioList.push(taskList[i])
            }
            else if(taskList[i].taskPriority == "High"){
                highPrioList.push(taskList[i])
            }
        }

        if(checkTwoArraysEqual(taskList, lowPrioList.concat(normalPrioList, highPrioList), "taskPriority")){
            taskList = highPrioList.concat(normalPrioList, lowPrioList)
        }
        else{
            taskList = lowPrioList.concat(normalPrioList, highPrioList)
        }
    }
    else if(parent.innerText === "Deadline"){
        let sortedTasklist = taskList.toSorted((a, b) => a.taskDeadline.localeCompare(b.taskDeadline))
        
        if(checkTwoArraysEqual(taskList, sortedTasklist, "taskDeadline")){
            taskList.reverse((a, b) => a.taskDeadline.localeCompare(b.taskDeadline))
        }
        else{
            taskList.sort((a, b) => a.taskDeadline.localeCompare(b.taskDeadline))
        }
    }



    showAllTasks()
}

function checkTwoArraysEqual(arr1, arr2, property){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i][property] != arr2[i][property]) return false
    }
    return true;
}

  
function changeTaskStatus(parent){    
    let timeToCompareTasks = parent.lastElementChild.innerHTML
    taskList.forEach(task => {  
        if(task.timestamp == timeToCompareTasks){
            task.done = !task.done
            localStorage.setItem("taskList", JSON.stringify(taskList))
            return            
        }
    })
}

function toggleHidden(){
    let divThatWillHide = document.getElementById('hidden')
    divThatWillHide.classList.toggle('hidden')
} 