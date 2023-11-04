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

//function to assign the "today" value to the date picker
document.addEventListener("DOMContentLoaded", function() {
  // get today value for date picker YYYY-MM-DD
  var today = new Date().toISOString().split('T')[0];
  
  // assign today value
  document.getElementById("datepicker").value = today;  
});

//function to input text and filter the info through dropdownlists
/*document.addEventListener("DOMContentLoaded", function() {
  var customers = ["John Doe", "Jordan Dunn", "Jeremy Dean", "Jane Day", "Jill Davis", "Jack Duncan", "Joseph Daniels"];

  var inputText = document.getElementById("inputCustomer");
  var dropdownOptions = document.getElementById("dropdownOptions");

  inputText.addEventListener("input", function() {
      var inputTextValue = inputText.value.toLowerCase();
      dropdownOptions.innerHTML = ""; // Limpiar las opciones existentes

      // Filtrar opciones basadas en las iniciales ingresadas
      var filteredCustomers = customers.filter(function(customer) {
          return customer.toLowerCase().startsWith(inputTextValue);
      });

      // Agregar opciones filtradas al dropdown
      filteredCustomers.forEach(function(customer) {
          var option = document.createElement("div");
          option.className = "dropdown-option";
          option.textContent = customer;
          option.addEventListener("click", function() {
              inputText.value = customer;
              dropdownOptions.innerHTML = ""; // Ocultar el dropdown después de seleccionar
          });

          // Agregar evento hover para resaltar las opciones
          option.addEventListener("mouseenter", function() {
            option.style.backgroundColor = "#f2f2f2";
        });

        option.addEventListener("mouseleave", function() {
            option.style.backgroundColor = "";
        });

          dropdownOptions.appendChild(option);
      });
      // Mostrar el dropdown solo si hay opciones
      dropdownOptions.style.display = filteredCustomers.length ? "block" : "none";
  });
  // Ocultar el dropdown cuando se hace clic fuera de él
  document.addEventListener("click", function(event) {
    if (!dropdownOptions.contains(event.target) && event.target !== inputText) {
        dropdownOptions.style.display = "none";
    }
  });
});*/

document.addEventListener("DOMContentLoaded", function() {
  var customerInput = document.getElementById("inputCustomer");
  var equipmentInput = document.getElementById("inputEquipment");
  var descriptionInput = document.getElementById("inputDescription");
  var customerDropdownOptions = document.getElementById("customerDropdownOptions");
  var equipmentDropdownOptions = document.getElementById("equipmentDropdownOptions");
  var descriptionDropdownOptions = document.getElementById("descriptionDropdownOptions");

  var customers = ["John Doe", "Jordan Dunn", "Jeremy Dean", "Jane Day", "Jill Davis", "Jack Duncan", "Joseph Daniels"];
  var equipment = ["Lawnmower H345", "Lawnmower PP56", "Leaf Blower B550", "Chainsaw C700", "Hedge Trimmer H123"];
  var descriptions = ["Engine Failure: Unable to Start", "Lawnmower Stalling During Operation", "Excessive Vibration and Noise", "Blades Not Rotating Properly", "Uneven Cutting or Scalping", "Difficulty in Gear Shifting"]

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
});

/* 
Code help from: https://www.w3schools.com/howto/howto_js_filter_table.asp
*/