
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var messageInput = document.getElementById('message').value;
  

    if (!nameInput || !emailInput || !messageInput) {
      alert('Please fill in all fields.');
      event.preventDefault(); 
    }
  
    
    if (!isValidEmail(emailInput)) {
      alert('Please enter a valid email address.');
      event.preventDefault(); 
    }
  });
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  
  var menuItems = document.querySelectorAll('#menu a');
  menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var sectionId = item.getAttribute('href').substring(1);
      var section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<h3>' + data.title + '</h3><p>' + data.body + '</p>';
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  