var input = prompt("Enter In Your Paragraph");

var characterCount = input.length;
var remainingCount = 140 - parseInt(characterCount);

alert("In this prompt, You have used " + characterCount + " Characters. you have " + remainingCount + " Characters left")
