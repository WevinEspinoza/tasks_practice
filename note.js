const diasDeLaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Mi\u00E9rcoles",
  "Jueves",
  "Viernes",
  "S\u00E1bado",
];
const mesesDelAno = [
  "Ene",
  "Febr",
  "Marz",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Agos",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];

function agregarFecha() {
  const dayNumber = document.getElementById("dayNumber");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const day = document.getElementById("day");

  const actualDate = new Date();
  dayNumber.textContent = actualDate.getDate();
  const monthNumber = actualDate.getMonth();
  month.textContent = mesesDelAno[monthNumber];
  year.textContent = actualDate.getFullYear();
  const dayName = actualDate.getDay();
  day.textContent = diasDeLaSemana[dayName];
}

function addToTable(value) {
  // Crea una nueva fila y celda
  const dataTable = document.getElementById("dataTable").querySelector("tbody");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  newCell.className = "newCell";

  // Establece el valor de la celda
  newCell.textContent = value;

  // Crea un contenedor de botones para mantenerlos a la derecha
  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  //crea el boton de check
  const checkButton = document.createElement("button");
  // crea el icono check
  const checkIcon = document.createElement("span");
  checkIcon.className = "icon-check";
  checkButton.appendChild(checkIcon);

  checkButton.className = "check-btn";
  checkButton.addEventListener("click", function () {
    // te toca;
  });

  // Crea el botón de borrar
  const deleteButton = document.createElement("button");
  // Crea el icono borrar
  const deleteIcon = document.createElement("span");
  deleteIcon.className = "icon-basura";
  deleteButton.appendChild(deleteIcon);

  // deleteButton.textContent = "Borrar";

  deleteButton.className = "delete";
  deleteButton.addEventListener("click", function () {
    dataTable.removeChild(newRow);
  });

  // Agrega el botón de borrar a la celda de borrar
  btnContainer.appendChild(checkButton);
  btnContainer.appendChild(deleteButton);
  newCell.appendChild(btnContainer);

  // Agrega la celda a la fila
  newRow.appendChild(newCell);
  // newRow.appendChild(deleteCell);

  // Agrega la fila al cuerpo de la tabla
  dataTable.appendChild(newRow);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputField");
  const addButton = document.getElementById("addButton");

  addButton.addEventListener("click", function (event) {
    const inputValue = inputField.value;
    event.preventDefault();
    if (inputValue) {
      // Verifica que el campo no esté vacío
      addToTable(inputValue);
      inputField.value = ""; // Limpia el campo de entrada después de agregar el valor
    }
  });

  agregarFecha();
});
