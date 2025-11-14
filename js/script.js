// console.log("hello word")


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
        renderTodos();
    }
}
// function to render todo items to the DOM
function renderTodos(list = todo) {
    //get the todo list container
    const todoList = document.getElementById("todo-list");
    
    //clear the existing todo items
    todoList.innerHTML = "";

    // mengecek jika tidak ada todo item menampilkan pesan
    if (list.length === 0) {
        todoList.innerHTML = "<li><p class='text-gray-500'>No todo items found.</p></li>";
        return;
    }

    //render each todo item
    list.forEach((todoItem) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todoItem.item} - <span class="text-sm text-gray-500">${todoItem.date}</span></p>
            <hr/>
        </li>`;
    }
    );
}


// placeholder for future filter functionality
function filterTodos() {
    //filter logic will go here
    const keyword = document.getElementById("filter-input").value.toLowerCase().trim();

    // bagian pentuk untuk "mengembalikan sebelum filter"
    if (keyword === "") {
        // kalau filter kosong ->> tampilkan semua todo
        renderTodos();
        return;
    }
    const filteredList = todo.filter((todoItem) => 
        todoItem.item.toLowerCase().includes(keyword) || 
        todoItem.date.toLowerCase().includes(keyword)
    );
    // tampilkan hasil filter ke layar
    renderTodos(filteredList);
    

}

function resetFilter() {
    const filterInput = document.getElementById("filter-input");
    filterInput.value = ""; //kosongkan input
    renderTodos(); //tampilkan semua todo
}
function clearAllTodos() {
    todo = [];  //kosongkan array todo
    renderTodos(); //tampilkan semua todo (yang sekarang kosong)
    alert("All todos have been cleared.");
}