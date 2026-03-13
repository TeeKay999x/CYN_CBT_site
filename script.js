document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Function to add a task
    const addTask = () => {
        const taskValue = input.value.trim();
        
        if (taskValue === "") return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Delete functionality
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        todoList.appendChild(li);
        input.value = ""; // Clear input
    };

    addBtn.addEventListener('click', addTask);

    // Allow pressing "Enter" to add task
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});
