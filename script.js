// Assignment code here
// Variable for password length and the password array.
var passLength = 8;
var passArr = [];

// Global variables for all available characters to be used in password generator. .split is used to turn the strings into arrays.
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var specChar = '`~!@#$%^&*()-_=+,<.>/?;:[{]}'.split('');
var numeric = '0123456789'.split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
  
      passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passPrompts() {
  passArr = [];

  passLength = parseInt(prompt('Please choose a number between 8 - 128 for your desired password.'));
    
    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert('Enter an integer between 8 - 128. Please try again.');
    return false;
  }

  if (confirm('Do you want your new password to contain uppercase letters?')) {
    passArr = passArr.concat(upperCase);
  }
  if (confirm('Do you want your new password to contain lowercase letters?')) {
    passArr = passArr.concat(lowerCase);
  }
  if (confirm('Do you want your new password to contain special characters?')) {
    passArr = passArr.concat(specChar);
  }
  if (confirm('Do you want your new password to contain numbers?')) {
    passArr = passArr.concat(numeric);
  }
  return true;
}