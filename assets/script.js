// Assignment code here
const myPasswordGenerator = {
  _numbers: ['0','1','2','3','4','5','6','7','8','9'],
  _lowerCaseAlphabets: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  _upperCaseAlphabets: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  _specialCharacters: ['\\','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'],
  _usingNumbers: true,
  _usingLowerCase: true,
  _usingUpperCase: true,
  _usingSpecials: true,

  getNumbers: function(){
    return this._numbers;
  },

  getLowerCaseAlphabets: function(){
    return this._lowerCaseAlphabets
  },

  getUpperCaseAlphabets: function(){
    return this._upperCaseAlphabets;
  },

  getSpecialCharacters: function(){
    return this._specialCharacters
  },

  getUsingNumbers: function(){
    return this._usingNumbers
  },

  setUsingNumbers: function(input){
    this._usingNumbers = input;
  },

  getUsingUpperCase: function(){
    return this._usingUpperCase;
  },

  setUsingUpperCase: function(input){
    this._usingUpperCase = input;
  },

  getUsingLowerCase: function(){
    return this._usingLowerCase;
  },

  setUsingLoweCase: function(input){
    this._usingLowerCase = input;
  },

  getUsingSpecials: function(){
    return this._usingSpecials;
  },

  setUsingSpecials: function(input){
    this._usingSpecials = input;
  },

  confirmNumber: function(){
    
      const response = confirm("Do you want to use numbers?");

      if (response) {
          this.setUsingNumbers(true)
      } else {
        this.setUsingNumbers(false)
      }
  },
  confirmUpperCase: function(){
    
    const response = confirm("Do you want to use uppercase letters?");

    if (response) {
        this.setUsingUpperCase(true)
    } else {
      this.setUsingUpperCase(false)
    }
  },

  confirmLowerCase: function(){
    
    const response = confirm("Do you want to use lowercase letters?");

    if (response) {
        this.setUsingLoweCase(true)
    } else {
      this.setUsingLoweCase(false)
    }
  },

  confirmSpecials: function(){
    
    const response = confirm("Do you want to use special characters?");

    if (response) {
      this.setUsingSpecials(true)
    } else {
      this.setUsingSpecials(false)
    }
  },


  generatePassword: function(){
    let characterList;
    console.log(this._usingLowerCase,this._usingNumbers,this._usingSpecials,this._usingUpperCase)
    this.confirmLowerCase();
    this.confirmUpperCase();
    this.confirmNumber();
    this.confirmSpecials();
    console.log(this._usingLowerCase,this._usingNumbers,this._usingSpecials,this._usingUpperCase)
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = myPasswordGenerator.generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(myPasswordGenerator.getNumbers())