let todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text) {
        todos.push({ id: Date.now(), text: text });
        saveTodos();
        renderTodos();
        input.value = '';
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = todos.map(todo => 
        `<li>${todo.text} <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button></li>`
    ).join('');
}

// Load todos when page loads
renderTodos();
