let optionalForm = document.getElementById("form-optional");
let yesButton = document.getElementById("seriesYes");
let noButton = document.getElementById("seriesNo");

let showOptionalForm = function() {
  optionalForm.style.display = "block";
};

let hideOptionalForm = function() {
  optionalForm.style.display = "none";
};

yesButton.addEventListener("click", showOptionalForm);
noButton.addEventListener("click", hideOptionalForm);
