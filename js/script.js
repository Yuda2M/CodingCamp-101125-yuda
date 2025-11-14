console.log("hello word")


let todo = [];
function addTodo(item) {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    //validation
    if (todoInput.value === "" || todoDate.value === "") {
        alert("Please enter a todo item and date.");
    }
    else {
        todo.push({ item: todoInput.value, date: todoDate.value });
        todoInput.value = "";
        todoDate.value = "";
        console.log(todo);

    }
}
// function to render todo items to the DOM
function renderTodos() {
    //get the todo list container
    const todoList = document.getElementById("todo-list");
    //clear the existing todo items
    todoList.innerHTML = "";

    //render each todo item
    todo.forEach((todoItem, _) => {
        todoList.innerHTML += `
        <div class="todo-item">
            <span>${todoItem.item}</span>
            <span>${todoItem.date}</span>
        </div>
        `;
    }
    );
}

//event listener for the add button
document.getElementById("add-button").addEventListener("click", () => {
    addTodo();
    renderTodos();
});
