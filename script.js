// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const specialChars = '!@$%^&*()_+';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordGeneratorKey = '';
  var password = '';
  var passwordLength = prompt("Enter the length of Password required (between 8-128) ");

  if (passwordLength.length <= 0 || isNaN(passwordLength)) {
    alert("Invalid  input! Please Enter a number between 8 and 128");
    return generatePassword();
    
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid  Password length ! Please Enter a number between 8 and 128");
    return generatePassword();
  }

  var isUpperCaseRequired = window.confirm('whether upperCase is required?');
  var islowerCaseRequired = window.confirm('whether lowercase is required?');
  var isNumberRequired = window.confirm('whether number is required?');
  var isSpecialcharacterRequired = window.confirm('whether specialchars is required?');
  if (isUpperCaseRequired) {
    passwordGeneratorKey = upperCaseChars;
    password += getRandomValueFromString(upperCaseChars);
  }
  if (islowerCaseRequired) {
    passwordGeneratorKey = passwordGeneratorKey + lowerCaseChars;
    password += getRandomValueFromString(lowerCaseChars);
  }
  if (isNumberRequired) {
    passwordGeneratorKey = passwordGeneratorKey + numbers;
    password += getRandomValueFromString(numbers);
  }
  if (isSpecialcharacterRequired) {
    passwordGeneratorKey = passwordGeneratorKey + specialChars;
    password += getRandomValueFromString(specialChars);
  }
  if (passwordGeneratorKey.length <= 0) {
    alert("Please select atleast one password requirement cirteria  ");
    return generatePassword();
  }
  for (i = password.length; i < passwordLength; i++) {
    // var randomNumber = Math.floor(Math.random() * passwordGeneratorKey.length);
    password += getRandomValueFromString(passwordGeneratorKey);
  }
  return password;
}

//return a random character from the input string
function getRandomValueFromString (value) {
  var randomNumber = Math.floor(Math.random() * value.length);
  return  value.substring(randomNumber, randomNumber + 1);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
