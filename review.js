document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary HTML elements
    const starRating = document.getElementById('star-rating');  // The stars for rating
    const commentInput = document.getElementById('comment');    // The comment input field
    const submitButton = document.getElementById('submit-review'); // The submit button
    const commentsSection = document.getElementById('comments-section'); // Where the reviews will appear
  
    let selectedRating = 0; // To store the selected star rating
  
    // When a star is clicked, update the rating
    starRating.addEventListener('click', (e) => {
      if (e.target.classList.contains('star')) {
        selectedRating = e.target.getAttribute('data-value'); // Get the value of the clicked star
        updateStars(selectedRating); // Update the stars to show the selected rating
      }
    });
  
    // This function updates the stars based on the rating
    function updateStars(rating) {
      const stars = starRating.querySelectorAll('.star');  // Get all the stars
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add('selected'); // Highlight the selected stars
        } else {
          star.classList.remove('selected'); // Remove the highlight from the unselected stars
        }
      });
    }
  
    // When the submit button is clicked, save the review
    submitButton.addEventListener('click', () => {
      const commentText = commentInput.value.trim();  // Get the comment text
  
      // Check if a rating is selected
      if (selectedRating === 0) {
        alert('Please select a star rating.');
        return; // Don't proceed if no rating is selected
      }
  
      // Check if the comment is empty
      if (!commentText) {
        alert('Please write a comment.');
        return; // Don't proceed if no comment is entered
      }
  
      // Add the review to the comments section
      addComment(selectedRating, commentText);
  
      // Reset the form after submission
      selectedRating = 0;
      updateStars(0); // Reset the stars display
      commentInput.value = ''; // Clear the comment input
    });
  
    // This function adds the review to the page
    function addComment(rating, comment) {
      const commentCard = document.createElement('div'); // Create a new div for the review
      commentCard.classList.add('comment-card'); // Add a class to style the review
  
      // Display the rating with stars and the comment
      const starDisplay = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  
      // Set the HTML for the new review card
      commentCard.innerHTML = `
        <h4>Rating: ${starDisplay}</h4>
        <p>${comment}</p>
      `;
  
      // Add the new review to the comments section
      commentsSection.appendChild(commentCard);
    }
  });