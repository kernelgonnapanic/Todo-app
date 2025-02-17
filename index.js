//add element
let input = document.querySelector("#add");
let btn = document.querySelector(".btnCheck");
let toDoList = document.querySelector(".todo-list");
let checkbox = document.querySelector(".checkbox");
let check = document.querySelector(".check");
let label = document.querySelector("label");
let itemsLeft = document.querySelector(".items-left span");
let completedFilterButton = document.querySelector("#completed");
let activeFilterButton = document.querySelector("#active");
let allFilterButton = document.querySelector("#all");
let switcher = document.querySelector(".switcher");

itemsLeft.innerText = document.querySelectorAll(
  ".todo-list li label input:checked"
).length;

let todos = [];

const addElement = function () {
  // let li = document.querySelector('ul');

  let txt = document.getElementById("add").value;
  if (txt === "") {
    alert("you must write something");
  } else {
    const li = document.createElement("li");
    li.innerHTML += `
        <label>
            <input type="checkbox">
            <div class="checkbox">
                <div class="check">
                </div>
            </div>
            <span>${txt}</span>
            <img src="images/icon-cross.svg" alt="delete" class="delete">
        </label>
        `;

    toDoList.appendChild(li);
    const input = li.querySelector("input");

    input.addEventListener("click", () => {
      li.classList.toggle("checked");
    });
  }

  updateItemsCount(1);
};
btn.addEventListener("click", addElement);

// const addElement = function () {
//     // let li = document.querySelector('ul');

//     let txt = document.getElementById("add").value;
//     if(txt === ""){
//         alert("you must write something");
//     } else {
//         toDoList.innerHTML += `<li>
//         <label>
//         <input type="checkbox">
//         <div class="checkbox">
//           <div class="check">
//           </div>
//         </div>
//         <span>${txt}</span>
//         <img src="images/icon-cross.svg" alt="delete" class="delete">
//         </label>
//         </li>`;
//     // if (document.querySelector('.filter input[type="checkbox"]:checked').id === "completed") {
//     //     li.classList.add('hidden');

//     li.addEventListener("click", () => {
//         li.classList.toggle('checked');
//     })
//     };

//     updateItemsCount(1)

// }
// btn.addEventListener("click", addElement);

const updateItemsCount = function (number) {
  itemsLeft.innerText = +itemsLeft.innerText + number;
};
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13 || event.key === "Enter") {
    // todos.push( {value: event.target.value, checked: false});
    addElement();
    // console.log(todos);
  }
});

function deleteToDoList(li) {
  li.remove();
  updateItemsCount(-1);
}

toDoList.addEventListener("click", (f) => {
  if (f.target.classList.contains("delete")) {
    deleteToDoList(f.target.parentElement);
  }
});

//CLEAR all
document.querySelector(".clearAll").addEventListener("click", () => {
  document
    .querySelectorAll(".todo-list li label input:checked + .checkbox")
    .forEach((item) => {
      deleteToDoList(item.closest("li"));
    });
});

//switcher
const changeTheme = function () {
  document.body.classList.toggle("light");
};
switcher.addEventListener("click", changeTheme);

completedFilterButton.addEventListener("click", () => {
  toDoList.classList.toggle("completed");
  toDoList.classList.remove("active");
});

activeFilterButton.addEventListener("click", () => {
  toDoList.classList.toggle("active");
  toDoList.classList.remove("completed");
});

allFilterButton.addEventListener("click", () => {
  toDoList.classList.remove("active");
  toDoList.classList.remove("completed");
});
