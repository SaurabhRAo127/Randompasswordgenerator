const inputslider = document.getElementById("inputslider");
const slidervalue = document.getElementById("slidervalue");
const passBox = document.getElementById("passBox");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateButton = document.getElementById("generateButton");

// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

// Update slider value display
slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
  slidervalue.textContent = inputslider.value;
});

// Generate password on button click
generateButton.addEventListener("click", () => {
  passBox.value = generatePassword();
});

// Function to generate password
function generatePassword() {
  let passwordLength = inputslider.value;
  let charSet = "";

  if (includeLowercase.checked) charSet += lowercaseChars;
  if (includeUppercase.checked) charSet += uppercaseChars;
  if (includeNumbers.checked) charSet += numberChars;
  if (includeSymbols.checked) charSet += symbolChars;

  if (charSet.length === 0) {
    return "Select at least one option!";
  }

  let genPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    genPassword += charSet[randomIndex];
  }

  return genPassword;
}
