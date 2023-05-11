const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const todo = document.querySelector("#new-todo");
const dateButton = document.getElementById("date-today");
const completedList = document.querySelector("#completed-list");

// add button event listener function
button.addEventListener("click", () => {
    const newListItem = document.createElement("li");
    newListItem.innerText = todo.value;
    const deleteButton = createDeleteButton(newListItem);
    const completeButton = createCompleteButton(newListItem);
    list.appendChild(newListItem);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(completeButton);
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

// create button for today's date
dateButton.addEventListener("click", () =>{
    const currentDate = new Date();
    const dateString = currentDate.toString();
    alert(dateString);
});

const createCompleteButton = (newListItem) => {
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";

    completeButton.addEventListener("click", (event) => {
        itemIsCompleted(newListItem);
    });
    return completeButton;
}

const itemIsCompleted = (newListItem) => {
    const completedItem = document.createElement("li");
    newListItem.removeChild(newListItem.lastChild);
    newListItem.removeChild(newListItem.lastChild);
    completedItem.innerText = newListItem.innerText;
    completedList.appendChild(completedItem);
    completedItem.setAttribute("style", "color: white");
    list.removeChild(newListItem);
}