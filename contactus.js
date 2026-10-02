document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let isValid = true;
  
    // Reset error messages
    document.querySelectorAll('.error').forEach(error => (error.textContent = ''));
  
    // Validate each field
    const fields = [
      'reason',
      'description',
      'firstName',
      'lastName',
      'email',
      'address',
      'phone',
    ];
  
    fields.forEach(field => {
      const input = document.getElementById(field);
      if (!input.value) {
        isValid = false;
        document.getElementById(`${field}Error`).textContent = `${field} is required`;
      }
    });
  
    const privacyPolicy = document.getElementById('privacyPolicy');
    if (!privacyPolicy.checked) {
      isValid = false;
      alert('You must agree to the privacy policy');
    }
  
    if (isValid) {
      alert('Your problem has been registered. Our team will contact you soon.');
      this.reset();
    }
  });