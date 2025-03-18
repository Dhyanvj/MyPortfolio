document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show sending message
      formResponse.textContent = "Sending...";
      formResponse.style.color = "blue";
      
      // Prepare template parameters
      const templateParams = {
        from_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Send email using EmailJS
      emailjs.send('default_service', 'template_id', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          formResponse.textContent = "Message sent successfully!";
          formResponse.style.color = "green";
          contactForm.reset();
        }, function(error) {
          console.log('FAILED...', error);
          formResponse.textContent = "Failed to send message. Please try again.";
          formResponse.style.color = "red";
        });
    });
  });