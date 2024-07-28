// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = (task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete">X</button>
        `;

        // Event listener to mark task as completed
        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Event listener to delete task
        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
    };

    // Handle form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = taskInput.value.trim();
        if (task !== '') {
            addTask(task);
            taskInput.value = '';
        }
    });
});
