const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const todo = document.querySelector("#new-todo");

// add button event listener function
button.addEventListener("click", () => {
    const newListItem = document.createElement("li");
    newListItem.innerText = todo.value;
    const deleteButton = createDeleteButton(newListItem);
    list.appendChild(newListItem);
    newListItem.appendChild(deleteButton);
});

// create delete button
const createDeleteButton = (newListItem) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", (event) => {
        list.removeChild(newListItem);
    });
    return deleteButton;
}
