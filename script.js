console.log("Hello World!, the application has started!");

// Code an event handler for the submit event of the form.
function submitForm() {
  console.log("Submit Request button has been pressed!");
  validateForm();
}

function validateForm() {
  console.log("validateForm function has fired!");
  // 1. A value must be entered into each text box. Done
  var arrivalDate = document.getElementById("arrivalDateText").value;
  var nights = document.getElementById("nightsText").value;
  var name = document.getElementById("nameText").value;
  var email = document.getElementById("emailText").value;
  var phone = document.getElementById("phoneText").value;

  //  variable that holds accepts characters for an email address.
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    arrivalDate === "" ||
    nights === "" ||
    name === "" ||
    email === "" ||
    phone === ""
  ) {
    window.alert("Fields marked with a red star must not be left blank.");
    // 2. The number of nights must be numeric.
  } else if (isNaN(nights)) {
    window.alert(
      "The Nights text field must be numeric in value. Please try again."
    );
    // 3. The email address must match the pattern that's provided.
  } else if (!email.match(validRegex)) {
    window.alert(
      "Email format is incorrect. Valid email format: test@localhost.com. Please try again."
    );
  } else {
    console.log("User input is valid!");
  }

  // 4. Be sure to trim the entries and put them back into the controls
  //    regardless of whether the entries are valid.
}
