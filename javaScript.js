let todoList = document.getElementById("todo-container");

let inpElement = document.getElementById("inpElement");

let upldButton = document.createElement("button");
upldButton.className = "upldBtn"
upldButton.innerText = "Create"
todoList.appendChild(upldButton)

upldButton.addEventListener("click", function () {
    if (inpElement.value != ""){

        let todoCard = document.createElement("div");
        todoCard.className = "todo-card";
        let listItem = document.createElement("span");
        let dltButton = document.createElement("button");

        dltButton.className = "deleteBtn";
        dltButton.innerText = "X";

        listItem.innerText = inpElement.value;

        todoCard.appendChild(listItem);
        todoCard.appendChild(dltButton)
        todoList.appendChild(todoCard);

        dltButton.addEventListener("click", function () {
            todoCard.remove();
        })
        inpElement.value = ""


    }
})

inpElement.addEventListener("keypress", function (e) {
    console.log(e.key);
    if (e.key == "Enter" && inpElement.value != "") {
        let todoCard = document.createElement("div");
        todoCard.className = "todo-card";
        let listItem = document.createElement("span");
        let dltButton = document.createElement("button");
        dltButton.className = "deleteBtn";
        dltButton.innerText = "X";

        listItem.innerText = inpElement.value;
        todoCard.appendChild(listItem);
        todoCard.appendChild(dltButton)
        todoList.appendChild(todoCard);

        dltButton.addEventListener("click", function () {
            todoCard.remove();
        })
        inpElement.value = ""

    }
})