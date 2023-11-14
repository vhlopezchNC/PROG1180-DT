const dropdown = document.getElementById('filters');
const textInput = document.getElementById('userInput');

// Store the original placeholder text
const originalPlaceholder = "Search by...";

// Add an event listener to the dropdown
dropdown.addEventListener('change', function() {
    // Get the selected option's value
    const selectedValue = dropdown.value;

    // Remove the ellipsis and update the placeholder
    textInput.placeholder = originalPlaceholder.replace('...', ' ') + selectedValue;
});

// generated by AI