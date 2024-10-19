
let taskList = []; // Array to hold tasks initilize by 0
let currentTaskId = 1; 

// Function to display the menu
function displayMenu() {
    console.log(`
    Welcome to the Task Manager!
    1. Add New Task
    2. View All Tasks
    3. Toggle Task Completion
    4. Edit Task
    5. Delete Task
    6. Exit
    `);
}

function userChoice() {
    let userChoice;
    do {
        displayMenu(); 
        userChoice = prompt('Please select an option (1-6):'); 
        userSelection(userChoice);
    } while (parseInt(userChoice)!==6); // Exit if choice is 6
}

function userSelection(choice) {
    switch (parseInt(choice)) {
        case 1:
            addTask();
            break;
        case 2:
            displayTasks();
            break;
        case 3:
            changeTaskStatus();
            break;
        case 4:
            editTask();
            break;
        case 5:
            deleteTask();
            break;
        case 6:
            console.log('Exiting Task Manager!');
            break;
        default:
            console.log('Invalid selection Please try again');
            break;
    }
}

function addTask() {
    const taskDescription = prompt('Enter the task description:');
    taskList.push({ id: currentTaskId++, description: taskDescription, isCompleted: false });
    console.log(`Task "${taskDescription}" has been added successfully!`); 
}

function displayTasks() {
    console.log('\nCurrent Tasks:');
    if (taskList.length===0) {
        console.log('No tasks available at the moment.');
    } else {
        taskList.forEach(task => {
            console.log(`${task.id}. ${task.description} [${task.isCompleted ? 'Completed' : 'Pending'}]`); 
        });
    }
}

function changeTaskStatus() {
    const taskId = prompt('Enter the ID of the task you want to toggle:');
    const task = taskList.find(t =>t.id===parseInt(taskId));
    if (task) {
        task.isCompleted = !task.isCompleted;
        console.log(`Task "${task.description}" is now marked as [${task.isCompleted ? 'Completed' : 'Pending'}].`); 
    } else {
        console.log('Task not found  Please check the ID and try again!');
    }
}

// Function to update a task's description
function editTask() {
    const taskId = prompt('Enter the ID of the task you want to edit:');
    const task = taskList.find(t => t.id === parseInt(taskId));
    if (task) {
        const newDescription = prompt('Enter the new task description:');
        task.description = newDescription;
        console.log(`Task "${task.id}" has been updated to "${newDescription}".`); 
    } else {
        console.log('Task not found , Please check the ID and try again');
    }
}

// Function to remove a task from the list
function deleteTask() {
    const taskId = prompt('Enter the ID of the task you want to delete:');
    const taskIndex = taskList.findIndex(t=>t.id===parseInt(taskId));
    if (taskIndex!==-1) {
        taskList.splice(taskIndex, 1);
        console.log(`Task ID ${taskId} has been deleted.`); 
    } else {
        console.log('Task not found, Please check the ID and try again!');
    }
}

userChoice();//display menu again
