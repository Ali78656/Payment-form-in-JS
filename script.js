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

  // Validate First Name
  if (firstName.value.trim() === "") {
    alert("First Name is required");
    firstName.focus();
    isValid = false;
  }

  // Validate Last Name
  if (lastName.value.trim() === "") {
    alert("Last Name is required");
    lastName.focus();
    isValid = false;
  }

  // Validate Gender
  if (!genderMale.checked && !genderFemale.checked) {
    alert("Please select your Gender");
    isValid = false;
  }

  // Validate Address
  if (address.value.trim() === "") {
    alert("Address is required");
    address.focus();
    isValid = false;
  }

  // Validate CNIC Number
  if (cnic.value.trim() === "" || cnic.value.length !== 13) {
    alert("CNIC Number is required and must be 13 digits");
    cnic.focus();
    isValid = false;
  }

  // Validate Phone Number
  if (phoneNumber.value.trim() === "" || phoneNumber.value.length !== 11) {
    alert("Phone Number is required and must be 11 digits");
    phoneNumber.focus();
    isValid = false;
  }

  // Validate Email
  if (email.value.trim() === "") {
    alert("Email is required");
    email.focus();
    isValid = false;
  } else if (
    !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)
  ) {
    alert("Please enter a valid email address");
    email.focus();
    isValid = false;
  }

  // Validate Pin Code
  if (pinCode.value.trim() === "" || pinCode.value.length !== 4) {
    alert("Pin Code is required and must be 4 digits");
    pinCode.focus();
    isValid = false;
  }

  // Validate Card Number
  if (cardNumber.value.trim() === "" || cardNumber.value.length !== 16) {
    alert("Card Number is required and must be 16 digits");
    cardNumber.focus();
    isValid = false;
  }

  // Validate Expiry Date
  if (expiryDate.value.trim() === "") {
    alert("Expiry Date is required");
    expiryDate.focus();
    isValid = false;
  }

  // Validate CVV
  if (
    cvv.value.trim() === "" ||
    (cvv.value.length !== 3 && cvv.value.length !== 4)
  ) {
    alert("CVV is required and must be 3 or 4 digits");
    cvv.focus();
    isValid = false;
  }

  return isValid;
}

document
  .querySelector(".form-payNowButton")
  .addEventListener("click", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
