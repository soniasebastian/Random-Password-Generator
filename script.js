// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const num = '1234567890';
var specialchars = '!@$%^&*()_+';

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword () {
  var passwordGeneratorKey = '';
  var password = '';
  var passwordLength = prompt("Enter the length of Password required (between 8-128) ");
alert( typeof passwordLength);
  // if(passwordLength.length > 0 && (typeof passwordLength) !== Number) {
  //   alert("Please enter a number!")
  //   generatePassword();
  // }

  if (passwordLength < 8) {
    alert("Invalid! Password length is insufficient!")
    generatePassword();
}
if (passwordLength > 128) {
    alert("Invalid! Password length is too long!")
    generatePassword();
}
  var isUpperCaseRequired = window.confirm ('whether upperCase is required?');
  var islowerCaseRequired = window.confirm ('whether lowercase is required?');
  var isNumberRequired = window.confirm ('whether number is required?');
  var isSpecialcharacterRequired = window.confirm ('whether specialchars is required?');
  if (isUpperCaseRequired) {
    passwordGeneratorKey = upperCase;
  }
  if (islowerCaseRequired) {
    passwordGeneratorKey = passwordGeneratorKey + lowerCase;
  }
  if (isNumberRequired) {
    passwordGeneratorKey = passwordGeneratorKey + num;
  }
  if (isSpecialcharacterRequired){
    passwordGeneratorKey = passwordGeneratorKey +specialchars;
  }  
  console.log(passwordGeneratorKey  + " lenght= " + passwordGeneratorKey.length);
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordGeneratorKey.length);
    password += passwordGeneratorKey.substring(randomNumber, randomNumber +1);
   }
   return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
