let input = document.getElementById("todo-input");

let btn = document.getElementById("add-btn");

let list = document.getElementById("todo-list");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = input.value.trim();
  let listItem = document.createElement("li");
  let dltBtn = document.createElement("button");
  listItem.textContent = inputValue;
  dltBtn.textContent = "❌";
  listItem.appendChild(dltBtn);
  list.appendChild(listItem);

  dltBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let parent = e.target.parentNode;
   
    parent.remove();
  });
});
