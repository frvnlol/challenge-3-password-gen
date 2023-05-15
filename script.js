// Assignment code here
// Variable for password length and the password array.
var passLength = 0;
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
