// Check for saved theme preference or use system preference
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Set initial theme based on saved preference
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
    }
    
    // Function to switch themes
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    }
    
    // Event listener for theme switch
    toggleSwitch.addEventListener('change', switchTheme, false);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "an AI Engineer.",
        "a Machine Learning Engineer.",
        "a Software Engineer.",
        "an IT Professional."
    ];
    const animatedText = document.getElementById("animated-text");
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            animatedText.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            animatedText.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2500); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
            setTimeout(typeEffect, 500); // Pause before typing next phrase
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
        }
    }

    typeEffect();
});

// Enlarge Profile Image on Click
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const profileImg = document.getElementById("profileImage");
  const closeBtn = document.querySelector(".close");

  profileImg.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = profileImg.src;
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});

// Enlarge Degree Image on Click
document.addEventListener("DOMContentLoaded", () => {
  const degreeImg = document.getElementById("degreeImage");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  degreeImg.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = degreeImg.src;
  });
});