//Question 1
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
// Add leading zero if needed
const formattedHours = hours < 10 ? `0${hours}` : hours;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
// Get AM or PM
let amPm = 'AM';
if (hours >= 12) {
  amPm = 'PM';
}
const datetime = `${day}/${month}/${year} ${formattedHours}:${formattedMinutes} ${amPm}`;
document.getElementById("datetime").innerText = datetime;

//Question2
function validateForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    // Validate names
    if(!/^[a-zA-Z]*$/.test(firstName)) {
      alert("First name must contain only letters");
      return false;
    }
    
    if(!/^[a-zA-Z]*$/.test(lastName)) {
      alert("Last name must contain only letters");
      return false; 
    }
    
    // Validate first letter uppercase
    if(firstName[0] !== firstName[0].toUpperCase()) {
      alert("First letter of first name must be uppercase");
      return false;
    }
    
    // Validate names not same
    if(firstName === lastName) {
      alert("First and last name cannot be same");
      return false;
    }
    
    // Validate phone number
    var phone = document.getElementById("phone").value;
    if(!/^\(\d{3}\)\d{3}-\d{4}$/.test(phone)) {
      alert("Invalid phone number format");
      return false;
    }  
    
    // Validate email
    var email = document.getElementById("email").value;
    if(!/^[^@]+@[^@.]+\.[^@]+$/.test(email)) {
      alert("Invalid email format");
      return false;
    }
    
    // Validate comment length
    var comment = document.getElementById("comment").value;
    if(comment.length < 10) {
      alert("Comment must be at least 10 characters");
      return false;
    }
     // Validation logic
    
     if(invalidInput) {
        var errorMessage = "Error: " + errorDetails;
    
        document.getElementById("error").innerText = errorMessage;
    
        return false;
      }
    
    // Code to submit form
    return true; 
    }


//Question 3
// Get elements
const categorySelect = document.getElementById('categories');
const products = document.querySelectorAll('.product');

// Category change event listener
categorySelect.addEventListener('change', showCategory);

function showCategory() {

   // Get selected category
   const category = categorySelect.value;

   // Hide all products
   products.forEach(p => p.style.display = 'none');
 
   // Show matching
   products.forEach(p => {
     if (p.dataset.category === category) {
       p.style.display = 'block'; 
     }
   });
 
   // Special case for 'all'
   if (category === 'all') {
     products.forEach(p => p.style.display = 'block');
   }
 

}

//Question 7
