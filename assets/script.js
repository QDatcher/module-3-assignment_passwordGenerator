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

  get numbers(){
    return this._numbers;
  },

  get lowerCaseAlphabets(){
    return this._lowerCaseAlphabets
  },

  get upperCaseAlphabets(){
    return this._upperCaseAlphabets;
  },

  get specialCharacters(){
    return this._specialCharacters
  },

  setUsingNumbers: function(input){
    this._usingNumbers = input;
  },

  setUsingUpperCase: function(input){
    this._usingUpperCase = input;
  },

  setUsingLoweCase: function(input){
    this._usingLowerCase = input;
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
    console.log(this._usingLowerCase,this._usingUpperCase,this._usingNumbers,this._usingSpecials )
    this.confirmLowerCase();
    this.confirmUpperCase();
    this.confirmNumber();
    this.confirmSpecials();

    console.log(this._usingLowerCase,this._usingUpperCase,this._usingNumbers,this._usingSpecials )
    if(this._usingLowerCase){
      
    }
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

