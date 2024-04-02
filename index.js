#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n \t Welcome to Hibasheikh Todo List Application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task:"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask} Task added in Todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want more add task ?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your Udated Todo List:", todoList);
