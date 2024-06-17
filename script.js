const images = [
  { image: "Images/img1.jpg", answer: "india" },
  { image: "Images/Australia.jpg", answer: "australia" },
  { image: "Images/cambodia.jpg", answer: "cambodia" },
  { image: "Images/egypt.jpg", answer: "egypt" },
  { image: "Images/greece.jpg", answer: "greece" },
  { image: "Images/italy.jpg", answer: "italy" },
  { image: "Images/jordan.jpg", answer: "jordan" },
  { image: "Images/parris.jpg", answer: "france" },
  { image: "Images/spain.jpg", answer: "spain" },
  { image: "Images/brazil.jpg", answer: "brazil" },
  { image: "Images/china.jpg", answer: "china" },
];

// shuffle images //
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledPlaces = shuffle(images);
let currentPlaceIndex = -1;
let lives = 3;

//show the next image if correct//
function showNextImage() {
  currentPlaceIndex = (currentPlaceIndex + 1) % shuffledPlaces.length;
  document.getElementById("random").src =
    shuffledPlaces[currentPlaceIndex].image;
  document.getElementById("guess").value = ""; // Clear the input
}

function updateLives() {
  document.getElementById("lives").textContent = lives;
}

document.getElementById("submitBtn").addEventListener("click", function () {
  const placeInput = document.getElementById("guess").value.trim().toLowerCase();

  if (placeInput === shuffledPlaces[currentPlaceIndex].answer) {
    showNextImage();
  } else {
    lives--;
    updateLives();
    if (lives === 0) {
      alert("Game over! You've run out of lives.");
      // Optionally, you can reset the game here
      lives = 3;
      updateLives();
      shuffledPlaces = shuffle(images);
      showNextImage();
    } else {
      alert("Incorrect place. Try again!");
      document.body.style.backgroundColor = "red"; // Change background color to red
    }
  }
});

// Show image when the page loads
showNextImage();
updateLives();
