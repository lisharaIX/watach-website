document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Stop form submission

  // List of required fields
  const fields = [
      'reason',
      'description',
      'firstName',
      'lastName',
      'email',
      'address',
      'phone'
  ];

  // Loop through each field and check if it's filled
  for (let field of fields) {
      const input = document.getElementById(field);
      if (!input.value.trim()) { // If field is empty
          alert(`Please fill in the ${field} field correctly.`);
          return; // Stop checking further fields
      }
  }

  // If all fields are filled, show success message
  alert('Your problem has been registered. Our team will contact you soon.');
  this.reset(); // Reset the form
});
document.addEventListener('DOMContentLoaded', () => {
  const starRating = document.getElementById('star-rating');
  const commentInput = document.getElementById('comment');
  const submitButton = document.getElementById('submit-review');
  const commentsSection = document.getElementById('comments-section');

  let selectedRating = 0;

  // Update the rating when a star is clicked
  starRating.addEventListener('click', (e) => {
      if (e.target.classList.contains('star')) {
          selectedRating = +e.target.dataset.value;
          updateStars(selectedRating);
      }
  });

  // Highlight stars based on the selected rating
  function updateStars(rating) {
      starRating.querySelectorAll('.star').forEach((star, index) => {
          star.classList.toggle('selected', index < rating);
      });
  }

  // Submit the review
  submitButton.addEventListener('click', () => {
      const commentText = commentInput.value.trim();

      if (!selectedRating) return alert('Please select a star rating.');
      if (!commentText) return alert('Please write a comment.');

      addComment(selectedRating, commentText);
      alert('Thank you for your review!');
      resetForm();
  });

  // Add the review to the comments section
  function addComment(rating, comment) {
      const starDisplay = '★'.repeat(rating) + '☆'.repeat(5 - rating);
      const commentCard = document.createElement('div');
      commentCard.className = 'comment-card';
      commentCard.innerHTML = `<h4>Rating: ${starDisplay}</h4><p>${comment}</p>`;
      commentsSection.appendChild(commentCard);
  }

  // Reset the form after submission
  function resetForm() {
      selectedRating = 0;
      updateStars(0);
      commentInput.value = '';
  }
});
