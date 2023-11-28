function resetForm() {
  document.getElementById('productIdError').innerText = '';
  document.getElementById('productDescriptionError').innerText = '';
  document.getElementById('priceError').innerText = '';
  document.getElementById('supplierUsernameError').innerText = '';
  document.getElementById('supplierStatusError').innerText = '';
  document.getElementById('supplierEmailError').innerText = '';
}

function validateForm() {
  var valid = true;

  resetForm();

  var productId = document.getElementById('productId').value;
  var productDescription = document.getElementById('productDescription').value;
  var price = document.getElementById('price').value;
  var supplierUsername = document.getElementById('supplierUsername').value;
  var supplierStatus = document.querySelectorAll('input[name="supplierStatus"]:checked').length;
  var supplierEmail = document.getElementById('supplierEmail').value;

  if (!/^\d{8}$/.test(productId)) {
    document.getElementById('productIdError').innerText = 'Product ID must be 8 digits long.';
    valid = false;
  }

  if (productDescription.length < 20) {
    document.getElementById('productDescriptionError').innerText =
      'Product Description must be at least 20 characters.';
    valid = false;
  }

  if (price < 1 || price > 1000) {
    document.getElementById('priceError').innerText = 'Price must be between 1 and 1000.';
    valid = false;
  }

  if (!/^[A-Za-z][A-Za-z0-9_]{3,}$/.test(supplierUsername)) {
    document.getElementById('supplierUsernameError').innerText =
      'Username must start with an alphabet and have at least 4 characters.';
    valid = false;
  }

  if (supplierStatus === 0) {
    document.getElementById('supplierStatusError').innerText =
      'Please select at least one supplier status.';
    valid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(supplierEmail)) {
    document.getElementById('supplierEmailError').innerText = 'Please enter a valid email address.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
  }

  return valid;
}
