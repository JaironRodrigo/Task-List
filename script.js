const taskInput = document.getElementById("newTask");
const addButton = document.getElementById("btn-addTask");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  function gerarId() {
    return Math.floor(Math.random() * 3000);
  }
});
