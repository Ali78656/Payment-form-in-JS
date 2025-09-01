function displayError(elementClass, message) {
  const errorElement = document.querySelector("." + elementClass);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
  }
}

function clearError(elementClass) {
  const errorElement = document.querySelector("." + elementClass);
  if (errorElement) {
    errorElement.textContent = "";
  }
}

function validateForm() {
  const firstName = document.querySelector(".form-firstName");
  const lastName = document.querySelector(".form-lastName");
  const genderMale = document.querySelector(".form-genderMale");
  const genderFemale = document.querySelector(".form-genderFemale");
  const age = document.querySelector(".form-age");
  const address = document.querySelector(".form-address");
  const cnic = document.querySelector(".form-cnic");
  const phoneNumber = document.querySelector(".form-phoneNumber");
  const email = document.querySelector(".form-email");
  const pinCode = document.querySelector(".form-pinCode");
  const cardType = document.querySelector(".form-cardType");
  const cardNumber = document.querySelector(".form-cardNumber");
  const expiryDate = document.querySelector(".form-expiryDate");
  const cvv = document.querySelector(".form-cvv");

  let isValid = true;

  // Clear all previous errors
  clearError("form-firstName-error");
  clearError("form-lastName-error");
  clearError("form-gender-error");
  clearError("form-age-error");
  clearError("form-address-error");
  clearError("form-cnic-error");
  clearError("form-phoneNumber-error");
  clearError("form-email-error");
  clearError("form-pinCode-error");
  clearError("form-cardType-error");
  clearError("form-cardNumber-error");
  clearError("form-expiryDate-error");
  clearError("form-cvv-error");

  // Validate First Name
  if (firstName.value.trim() === "") {
    displayError("form-firstName-error", "First Name is required");
    isValid = false;
  }

  // Validate Last Name
  if (lastName.value.trim() === "") {
    displayError("form-lastName-error", "Last Name is required");
    isValid = false;
  }

  // Validate Gender
  if (!genderMale.checked && !genderFemale.checked) {
    displayError("form-gender-error", "Please select your Gender");
    isValid = false;
  }

  // Validate Address
  if (address.value.trim() === "") {
    displayError("form-address-error", "Address is required");
    isValid = false;
  }

  // Validate CNIC Number
  if (cnic.value.trim() === "" || cnic.value.length !== 13) {
    displayError(
      "form-cnic-error",
      "CNIC Number is required and must be 13 digits"
    );
    isValid = false;
  }

  // Validate Phone Number
  if (phoneNumber.value.trim() === "" || phoneNumber.value.length !== 11) {
    displayError(
      "form-phoneNumber-error",
      "Phone Number is required and must be 11 digits"
    );
    isValid = false;
  }

  // Validate Email
  if (email.value.trim() === "") {
    displayError("form-email-error", "Email is required");
    isValid = false;
  } else if (
    !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)
  ) {
    displayError("form-email-error", "Please enter a valid email address");
    isValid = false;
  }

  // Validate Pin Code
  if (pinCode.value.trim() === "" || pinCode.value.length !== 4) {
    displayError(
      "form-pinCode-error",
      "Pin Code is required and must be 4 digits"
    );
    isValid = false;
  }

  // Validate Card Number
  if (cardNumber.value.trim() === "" || cardNumber.value.length !== 16) {
    displayError(
      "form-cardNumber-error",
      "Card Number is required and must be 16 digits"
    );
    isValid = false;
  }

  // Validate Expiry Date
  if (expiryDate.value.trim() === "") {
    displayError("form-expiryDate-error", "Expiry Date is required");
    isValid = false;
  }

  // Validate CVV
  if (
    cvv.value.trim() === "" ||
    (cvv.value.length !== 3 && cvv.value.length !== 4)
  ) {
    displayError("form-cvv-error", "CVV is required and must be 3 or 4 digits");
    isValid = false;
  }

  return isValid;
}

// Real-time validation for input fields
document.querySelector(".form-firstName").addEventListener("input", () => {
  const firstName = document.querySelector(".form-firstName");
  if (firstName.value.trim() === "") {
    displayError("form-firstName-error", "First Name is required");
  } else {
    clearError("form-firstName-error");
  }
});

document.querySelector(".form-lastName").addEventListener("input", () => {
  const lastName = document.querySelector(".form-lastName");
  if (lastName.value.trim() === "") {
    displayError("form-lastName-error", "Last Name is required");
  } else {
    clearError("form-lastName-error");
  }
});

document.querySelector(".form-genderMale").addEventListener("change", () => {
  const genderMale = document.querySelector(".form-genderMale");
  const genderFemale = document.querySelector(".form-genderFemale");
  if (!genderMale.checked && !genderFemale.checked) {
    displayError("form-gender-error", "Please select your Gender");
  } else {
    clearError("form-gender-error");
  }
});
document.querySelector(".form-genderFemale").addEventListener("change", () => {
  const genderMale = document.querySelector(".form-genderMale");
  const genderFemale = document.querySelector(".form-genderFemale");
  if (!genderMale.checked && !genderFemale.checked) {
    displayError("form-gender-error", "Please select your Gender");
  } else {
    clearError("form-gender-error");
  }
});

document.querySelector(".form-age").addEventListener("change", () => {
  const age = document.querySelector(".form-age");
  // Assuming age selection has a default empty/placeholder option, validate if a valid age is selected
  if (age.value === "" || age.value === "child") {
    // Adjust 'child' if your first option is not a placeholder
    displayError("form-age-error", "Please select your Age");
  } else {
    clearError("form-age-error");
  }
});

document.querySelector(".form-address").addEventListener("input", () => {
  const address = document.querySelector(".form-address");
  if (address.value.trim() === "") {
    displayError("form-address-error", "Address is required");
  } else {
    clearError("form-address-error");
  }
});

document.querySelector(".form-cnic").addEventListener("input", () => {
  const cnic = document.querySelector(".form-cnic");
  if (cnic.value.trim() === "" || cnic.value.length !== 13) {
    displayError(
      "form-cnic-error",
      "CNIC Number is required and must be 13 digits"
    );
  } else {
    clearError("form-cnic-error");
  }
});

document.querySelector(".form-phoneNumber").addEventListener("input", () => {
  const phoneNumber = document.querySelector(".form-phoneNumber");
  if (phoneNumber.value.trim() === "" || phoneNumber.value.length !== 11) {
    displayError(
      "form-phoneNumber-error",
      "Phone Number is required and must be 11 digits"
    );
  } else {
    clearError("form-phoneNumber-error");
  }
});

document.querySelector(".form-email").addEventListener("input", () => {
  const email = document.querySelector(".form-email");
  if (email.value.trim() === "") {
    displayError("form-email-error", "Email is required");
  } else if (
    !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)
  ) {
    displayError("form-email-error", "Please enter a valid email address");
  } else {
    clearError("form-email-error");
  }
});

document.querySelector(".form-pinCode").addEventListener("input", () => {
  const pinCode = document.querySelector(".form-pinCode");
  if (pinCode.value.trim() === "" || pinCode.value.length !== 4) {
    displayError(
      "form-pinCode-error",
      "Pin Code is required and must be 4 digits"
    );
  } else {
    clearError("form-pinCode-error");
  }
});

document.querySelector(".form-cardType").addEventListener("change", () => {
  const cardType = document.querySelector(".form-cardType");
  // Assuming card type selection has a default empty/placeholder option, validate if a valid card type is selected
  if (cardType.value === "" || cardType.value === "type") {
    // Adjust 'type' if your first option is not a placeholder
    displayError("form-cardType-error", "Please select a Card Type");
  } else {
    clearError("form-cardType-error");
  }
});

document.querySelector(".form-cardNumber").addEventListener("input", () => {
  const cardNumber = document.querySelector(".form-cardNumber");
  if (cardNumber.value.trim() === "" || cardNumber.value.length !== 16) {
    displayError(
      "form-cardNumber-error",
      "Card Number is required and must be 16 digits"
    );
  } else {
    clearError("form-cardNumber-error");
  }
});

document.querySelector(".form-expiryDate").addEventListener("input", () => {
  const expiryDate = document.querySelector(".form-expiryDate");
  if (expiryDate.value.trim() === "") {
    displayError("form-expiryDate-error", "Expiry Date is required");
  } else {
    clearError("form-expiryDate-error");
  }
});

document.querySelector(".form-cvv").addEventListener("input", () => {
  const cvv = document.querySelector(".form-cvv");
  if (
    cvv.value.trim() === "" ||
    (cvv.value.length !== 3 && cvv.value.length !== 4)
  ) {
    displayError("form-cvv-error", "CVV is required and must be 3 or 4 digits");
  } else {
    clearError("form-cvv-error");
  }
});

document
  .querySelector(".form-payNowButton")
  .addEventListener("click", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
