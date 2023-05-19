// Assignment code here

// Variable for password length and the password array.
var passLength;
var passArr = [];

// Global variables for all available characters to be used in password generator. .split is used to turn the strings into arrays.
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var specChar = '`~!@#$%^&*()-_=+,<.>/?;:[{]}'.split('');
var numeric = '0123456789'.split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to prompt user for what their password preferences are.
function passPrompts() {
  passArr = [];

// parseInt is used to make sure that what is chosen is an integer.
  passLength = parseInt(prompt('Please choose a number between 8 - 128 for your desired password.'));
  
  // isNaN is used to give an error if the user input something other than an integer.
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert('Enter an integer between 8 - 128. Please try again.');
    return passPrompts();
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
}

// Function to generate random password after user has chosen their specified prompts.
function generatePassword() {
  passPrompts();
  var newPass = " ";
  for (var i = 0; i < passLength; i++) {
    var randomChoices = Math.floor(Math.random() * passArr.length);
    newPass = newPass + passArr[randomChoices];
  }
  return newPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
   passwordText.value = password;
  
}