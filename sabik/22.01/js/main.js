

function separateAndSort(inputName) {
  
  let vowels = [];
  let consonants = [];

  for (let i = 0; i < inputName.length; i++) {
     
      let letter = inputName[i];
      
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter  === 'u' || letter === "y")  {
          
          vowels.push(letter);
      } else {
          
          consonants.push(letter);
      }
  }

    vowels.sort();
    consonants.sort();

  
  return [vowels, consonants];
}


function outputMessage(arr) {
  return("Your string contains the following vowels: " + arr[0].join(", ") + ". And the following consonants: " + arr[1].join(", ") + ".");
}


let input = prompt("Please enter a  name ").toLowerCase();

let result = separateAndSort(input);

alert(outputMessage(result));
    

