const todo = [
    { 'text': 'Read a book', 'completed': false },
    { 'text': 'Clean the house', 'completed': false },
    { 'text': 'Buy groceries', 'completed': false }
]

const todoList = document.querySelector('.todo-list');
const input = document.getElementById('new-todo');
const button = document.querySelector('button');

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Render todos to the page
const renderTodos = () => {

// Clear the li's before we recreate them
    todoList.innerHTML = '';

// Create and add new list items to the DOM
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

// Display existing todos when the page loads
renderTodos();

// Add a new todo
 button.addEventListener('click', () => {
    const text = input.value.trim();

    if (text === '') return;

    // Add a new item to the list
    todos.push({
        text: input.value,
        completed: false
    });

// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos));

// Clear input
input.value = '';

// Update the DOM
renderTodos();
});