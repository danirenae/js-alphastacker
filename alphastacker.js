
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var lettersWhatever = []

function stackLetters() {
  for (var i = 0; i < letters.length; i++) {
    lettersWhatever += letters[i];
    console.log(lettersWhatever.replace(/(.{5})/g,"$1 "));

  }
}

stackLetters();
