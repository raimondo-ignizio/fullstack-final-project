require('./bootstrap');

let optionalForm = document.getElementById("form-optional");

function showOptionalForm() {
  if (document.getElementById("yes").checked) {
  optionalForm.style.display = "visible";
  }
};

function hideOptionalForm() {
  if (document.getElementById("no").checked) {
    optionalForm.style.display = "none";
  }
};
