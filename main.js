// Scroll to top button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Holder vores valgte allergier
let chosenAllergies = [];
function toggleChosenAllergy(name){
  if(chosenAllergies.includes(name)) chosenAllergies = chosenAllergies.filter(item => item != name);
  else chosenAllergies = [...chosenAllergies, name];

  const slidersDiv = document.getElementById("allergies-slider-area");

  if(slidersDiv != null) {
    // Fjern eksisterende input felter
    slidersDiv.innerHTML = "";

    // Lav input felter
    chosenAllergies.forEach(name => makeInputForAllergy(name, slidersDiv));
  }
}

function makeAllergiesButtonsInside(container){
  const allergiesList = ["Gluten", "Laktose", "Skaldyr", "Løg", "Æg", "Soya", "Oksekød", "Jordnødder", "Frugt", "Gris", "Hasselnødder", "Fisk", "Hvidløg", "Mælkeprotein", "Kylling"];

  // for(variabel; betingelsen; forhøjeren)
  for(let i = 0; i < allergiesList.length; i++) {
    // Make a button
    const myButton = document.createElement("button");
    myButton.innerText = allergiesList[i];

    // Toggle the "selected" classname on the button on click.
    myButton.addEventListener("click", () => {
      myButton.classList.toggle("selected");
      toggleChosenAllergy(allergiesList[i]);
    });

    // Put the button as a child of the container div
    container.appendChild(myButton);
  }
}

function makeInputForAllergy(name, container) {
  const oneAllergyDiv = document.createElement("div");
  oneAllergyDiv.classList += "allergy-input-container";

  const label = document.createElement("p");
  label.textContent = name;
  oneAllergyDiv.appendChild(label);

  const inputField = document.createElement("input");
  inputField.type = "range";
  inputField.classList += "allergy-slider"
  oneAllergyDiv.appendChild(inputField);

  container.appendChild(oneAllergyDiv)
}

// Find <div id="allergies-selection-component"> på siden.
const allergiesDiv = document.getElementById("allergies-selection-component");
if(allergiesDiv != null) makeAllergiesButtonsInside(allergiesDiv);

