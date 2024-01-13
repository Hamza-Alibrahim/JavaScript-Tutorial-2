let add = document.querySelector(".plus");
let tasks = document.querySelector(".tasks-content");
let input = document.querySelector(".add-task input");
let tasksnumber = document.querySelector(".tasks-count span");
let taskscompleted = document.querySelector(".tasks-completed span");
let notasks = document.querySelector(".tasks-content .no-tasks");
let delall = document.querySelector(".dall");
let comall = document.querySelector(".call");
window.onload = function () {
    input.focus();
}
add.onclick = function () {
    let x = 0;
    if (!input.value == "") {
        notasks.remove();
        let text = input.value;
        let span = document.createElement("span");
        span.className = "task-box";
        span.append(text);
        let del = document.createElement("span");
        del.className = "delete";
        del.append("Delete");
        span.appendChild(del);
        if (tasks.children.length > 0) {
            for (let i = 0; i < tasks.children.length; i++) {
                if (tasks.children[i].textContent === span.textContent) {
                    x++;
                }
            }
            if (x == 0) {
                tasks.appendChild(span);
                tasksnumber.textContent = +tasksnumber.textContent + 1;
            } else {
                console.log("Task is already added");
            }
        } else {
            tasks.appendChild(span);
            tasksnumber.textContent = +tasksnumber.textContent + 1;
        }
        input.value = "";
        input.focus();
    } else {
        console.log("Input value is empty");
    }
}
document.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        tasksnumber.textContent = +tasksnumber.textContent - 1;
        if (tasks.children.length == 0) {
            tasks.appendChild(notasks);
        }
    }
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
        if (e.target.classList.contains("finished")) {
            taskscompleted.textContent = +taskscompleted.textContent + 1;
        } else {
            taskscompleted.textContent = +taskscompleted.textContent - 1;
        }
    }
})
delall.onclick = function dalltasks() {
    let x = tasks.children.length;
    for (let i = 0; i < x; i++) {
        tasks.children[0].remove();
        tasksnumber.textContent = +tasksnumber.textContent - 1;
    }
    tasks.appendChild(notasks);
}
comall.onclick = function calltasks() {
    for (let i = 0; i < tasks.children.length; i++) {
        if (!tasks.children[i].classList.contains("finished") && !tasks.children[i].classList.contains("no-tasks")) {
            tasks.children[i].classList.toggle("finished");
            taskscompleted.textContent = +taskscompleted.textContent + 1;
        }
    }
}