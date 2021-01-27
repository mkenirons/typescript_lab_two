import {todoInterface} from './todointerface';

class Todo implements todoInterface{

    constructor(){}

    tasks: Array<string>=[];

    addTask(task:string):number{
        this.tasks.push(task);
        console.log("_____________ New Task Added ______________");
        console.log("Task " +task+ " inserted in the list");
        return this.tasks.length;
    }

    listAllItems():void{
        console.log("START: All items in Array:")
        this.tasks.forEach(function(task){
            console.log(task);
        })
        console.log("END: All items in Array:")
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index,1);
            console.log("______________ Task Removed _____________");
            console.log("Task " +task+ " removed from list.")
        }
        return this.tasks.length;
    }


}

let myTodos = new Todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');

myTodos.listAllItems();

myTodos.deleteTask('sleep');