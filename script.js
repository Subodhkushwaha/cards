function animateName(name = "Wish You Very Happy Birthday SHIVAM AGRAWAL  ", speed = 1000, loop = false) {
    const nameElement = document.querySelector(".logo h2");
    if (!nameElement) return; // Check if the element exists
  
    let currentIndex = 0;
    nameElement.textContent = ""; // Clear any existing content
  
    function showLetterByLetter() {
      if (currentIndex < name.length) {
        nameElement.textContent += name[currentIndex];
        currentIndex++;
        setTimeout(showLetterByLetter, speed); // Call recursively to display the next letter
      } else {
        setTimeout(() => {
          if (loop) {
            currentIndex = 0; 
            nameElement.textContent = ""; 
            showLetterByLetter(); // Restart the animation if loop is true
          } else {
            nameElement.textContent = name; // Ensure the full name is displayed
          }
        }, 2000);
      }
    }
  
    showLetterByLetter(); // Start the animation
}

// Call the function to start the animation
animateName("Wish You Very Happy Birthday SHIVAM AGRAWAL  ", 250, true); // (Name, Speed, Loop)
