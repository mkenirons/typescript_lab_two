let tasks: string[] = [];

function addTask(task:string):number{
    tasks.push(task);
    console.log("_____________ New Task Added ______________");
    console.log("Task " +task+ " inserted in the list");
    return tasks.length;
}

function listAllTasks():void{
    console.log("START: All items in Array:")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("END: All items in Array:")
}

function deleteTask(task:string):number{
    let index:number = tasks.indexOf(task);
    if(index > -1){
        tasks.splice(index,1);
        console.log("______________ Task Removed _____________");
        console.log("Task " +task+ " removed from list.")
    }
    return tasks.length;
}

let x :number = addTask('wake up');
console.log("Number of items in list: "+x);
addTask('sleep');

listAllTasks();

deleteTask('sleep');