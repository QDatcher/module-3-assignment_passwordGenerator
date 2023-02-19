// Assignment code here
const myPasswordGenerator = {
  //These are the beginning values for our character selection
  _numbers: ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9',],
  _lowerCaseAlphabets: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  _upperCaseAlphabets: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  _specialCharacters: ['\\','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'],
  _usingNumbers: true,
  _usingLowerCase: true,
  _usingUpperCase: true,
  _usingSpecials: true,

  //These are functions designed to change the boolean value of our "using" values denoting which characters will be used
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

// These methods tell us whether or not our user wants to exclude/include any of the 4 types of characters

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

  greeting: function(){
    alert('Welcome to password generator. When answering the prompts please select "Ok" for yes and "cancel" for no')
  },

  //This is where the magic happens and our password is generated

  generatePassword: function(){
    let characterList = [];
    let password = [];
    this.greeting();
    this.confirmLowerCase();
    this.confirmUpperCase();
    this.confirmNumber();
    this.confirmSpecials();

    if(!this._usingLowerCase && !this._usingNumbers && !this._usingSpecials && !this._usingUpperCase){
      alert('Select atleast 1 character type')
      return 'Try again :)';
    }
    

    if(this._usingLowerCase){
      characterList = characterList.concat(this._lowerCaseAlphabets)
    }
    if(this._usingUpperCase){
      characterList = characterList.concat(this._upperCaseAlphabets)
    }
    if(this._usingNumbers){
      characterList = characterList.concat(this._numbers)
    }
    if(this._usingSpecials){
      characterList = characterList.concat(this._specialCharacters)
    }


    let number = prompt("Give a number from range 8 - 128");
    number = Number(number);

    if( 8<= number && number <= 128){
      
      for(let i = 0; i < number; i++){
        const randoNumber = Math.floor(Math.random()*characterList.length)
        password.push(characterList[randoNumber])
      }
    } else if( 8 > number || number > 128){
      alert('Number selected is outside of the boundery')
      return 'Try again :)';
    } else {
      alert('Invalid input')
      return 'Try again :)';
    }



    const finalPassword = password.join('')
    return finalPassword;

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

