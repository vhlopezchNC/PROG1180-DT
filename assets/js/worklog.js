function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
    } 
}



document.addEventListener("DOMContentLoaded", function() {
  // Obtener la fecha y hora actual en la zona horaria local
  var today = new Date();
  
  // Obtener componentes individuales de fecha y hora
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0');  // enero es 0
  var day = String(today.getDate()).padStart(2, '0');
  var hours = String(today.getHours()).padStart(2, '0');
  var minutes = String(today.getMinutes()).padStart(2, '0');
  
  // Formato deseado: YYYY-MM-DDTHH:mm
  var formattedToday = `${year}-${month}-${day}T${hours}:${minutes}`;
  
  // Asignar el valor actual al campo datetime-local
  document.getElementById("datetimepicker").value = formattedToday;
});


//Metodo valido
/*document.addEventListener("DOMContentLoaded", function() {
  var customerInput = document.getElementById("inputCustomer");
  var equipmentInput = document.getElementById("inputEquipment");
  var descriptionInput = document.getElementById("inputDescription");
  var technicianInput = document.getElementById("inputTechnician");

  var customerDropdownOptions = document.getElementById("customerDropdownOptions");
  var equipmentDropdownOptions = document.getElementById("equipmentDropdownOptions");
  var descriptionDropdownOptions = document.getElementById("descriptionDropdownOptions");
  var technicianDropdownOptions = document.getElementById("technicianDropdownOptions");

  var customers = ["John Doe", "Jordan Dunn", "Jeremy Dean", "Jane Day", "Jill Davis", "Jack Duncan", "Joseph Daniels"];
  var equipment = ["Lawnmower H345", "Lawnmower PP56", "Leaf Blower B550", "Chainsaw C700", "Hedge Trimmer H123"];
  var descriptions = ["Engine Failure: Unable to Start", "Lawnmower Stalling During Operation", "Excessive Vibration and Noise", "Blades Not Rotating Properly", "Uneven Cutting or Scalping", "Difficulty in Gear Shifting"];
  var technicians = ["Catalin Spirleanu", "Jorge Castano", "Nigel Temple", "Ryan Cote", "Victor Lopez"];

  function handleInput(inputElement, data, dropdownOptions) {
      inputElement.addEventListener("input", function() {
          var inputTextValue = inputElement.value.toLowerCase();
          dropdownOptions.innerHTML = ""; // Limpiar las opciones existentes

          // Filtrar opciones basadas en las iniciales ingresadas
          var filteredData = data.filter(function(item) {
              return item.toLowerCase().startsWith(inputTextValue);
          });

          // Agregar opciones filtradas al dropdown
          filteredData.forEach(function(item) {
              var option = document.createElement("div");
              option.className = "dropdown-option";
              option.textContent = item;
              option.addEventListener("click", function() {
                  inputElement.value = item;
                  dropdownOptions.innerHTML = ""; // Ocultar el dropdown después de seleccionar                  
              });

              // Agregar evento hover para resaltar las opciones
              option.addEventListener("mouseenter", function() {
                  option.style.backgroundColor = "#007bff";
                  option.style.color = "#fff";                  
              });

              option.addEventListener("mouseleave", function() {
                  option.style.backgroundColor = "";
                  option.style.color = "#000";
              });

              dropdownOptions.appendChild(option);
          });
          // Mostrar el dropdown solo si hay opciones
          dropdownOptions.style.display = filteredData.length ? "block" : "none";
      });
  }

  handleInput(customerInput, customers, customerDropdownOptions);
  handleInput(equipmentInput, equipment, equipmentDropdownOptions);
  handleInput(descriptionInput, descriptions, descriptionDropdownOptions);
  handleInput(technicianInput, technicians, technicianDropdownOptions);
});*/

document.addEventListener("DOMContentLoaded", function() {
  
  var descriptionInput = document.getElementById("inputDescription");
  var technicianInput = document.getElementById("inputTechnician");

  
  var descriptionDropdownOptions = document.getElementById("descriptionDropdownOptions");
  var technicianDropdownOptions = document.getElementById("technicianDropdownOptions");

  
  var descriptions = ["Engine Failure: Unable to Start", "Lawnmower Stalling During Operation", "Excessive Vibration and Noise", "Blades Not Rotating Properly", "Uneven Cutting or Scalping", "Difficulty in Gear Shifting"];
  var technicians = ["Catalin Spirleanu", "Jorge Castano", "Nigel Temple", "Ryan Cote", "Victor Lopez"];

  function handleInput(inputElement, data, dropdownOptions) {
      inputElement.addEventListener("input", function() {
          var inputTextValue = inputElement.value.trim().toLowerCase();
          dropdownOptions.innerHTML = ""; // Limpiar las opciones existentes

          // Filtrar opciones basadas en las iniciales ingresadas
          var filteredData = data.filter(function(item) {
              return item.toLowerCase().includes(inputTextValue);
          });

          // Agregar opciones filtradas al dropdown
          filteredData.forEach(function(item) {
              var option = document.createElement("div");
              option.className = "dropdown-option";
              option.textContent = item;
              option.addEventListener("click", function() {
                  inputElement.value = item;
                  dropdownOptions.innerHTML = ""; // Ocultar el dropdown después de seleccionar                  
              });

              // Agregar evento hover para resaltar las opciones
              option.addEventListener("mouseenter", function() {
                  option.style.backgroundColor = "#007bff";
                  option.style.color = "#fff";                  
              });

              option.addEventListener("mouseleave", function() {
                  option.style.backgroundColor = "";
                  option.style.color = "#000";
              });

              dropdownOptions.appendChild(option);
          });

          // Mostrar el dropdown solo si hay opciones
          dropdownOptions.style.display = filteredData.length ? "block" : "none";
      });
  }

  function closeDropdownsOnWindowClick() {
      window.addEventListener("click", function(event) {
          if (!event.target.matches('.form-control')) {
              // Si se hace clic fuera del área del input, ocultar todos los dropdowns
              
              descriptionDropdownOptions.style.display = "none";
              technicianDropdownOptions.style.display = "none";
          }
      });
  }

  
  handleInput(descriptionInput, descriptions, descriptionDropdownOptions);
  handleInput(technicianInput, technicians, technicianDropdownOptions);
  closeDropdownsOnWindowClick();
});



/* 
Code help from: https://www.w3schools.com/howto/howto_js_filter_table.asp
*/