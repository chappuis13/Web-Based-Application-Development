// Ambil elemen
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Fungsi tambah task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Isi dulu tugasnya!");
    return;
  }

  // Buat <li>
  const li = document.createElement("li");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Teks
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  // Tombol delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.className = "deleteBtn";

  // Event checkbox → tandai selesai
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  // Event delete → hapus task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Masukkan semua ke <li>
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Tambahkan ke daftar
  taskList.appendChild(li);

  // Reset input
  taskInput.value = "";
}

// Event klik tombol +
addBtn.addEventListener("click", addTask);

// Tekan Enter juga bisa tambah
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
