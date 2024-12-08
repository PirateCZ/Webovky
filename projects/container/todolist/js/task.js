class task{
    constructor(taskName, taskPriority, taskDeadline){
        this.done = false;
        this.taskName = taskName
        this.taskPriority = taskPriority
        this.taskDeadline = taskDeadline;
        this.timestamp = new Date();
    }
}