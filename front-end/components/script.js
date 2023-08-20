document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = [
      { id: "exercise", json: "data1.json" },
      { id: "dropReps", json: "data2.json" },
      { id: "dropSets", json: "dataSets.json" }
    ];
  
    dropdowns.forEach(dropdownInfo => {
      const dropdown = document.getElementById(dropdownInfo.id);
  
      fetch(dropdownInfo.json)
        .then(response => response.json())
        .then(data => {
          data.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            dropdown.appendChild(optionElement);
          });
        })
        .catch(error => console.error(`Error loading JSON data for ${dropdownInfo.id}:`, error));
    });
  });
  