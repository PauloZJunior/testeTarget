function verifyLetterA(text) {
    let count = 0;
    
    const lowerText = text.toLowerCase();
    const length = lowerText.length;
    
    for (let index = 0; index < length; index += 1) {
      if (lowerText[index] === 'a') {
        count += 1;
      }
    }
    
    return `A letra "a" aparece ${count} vez(es) na string.`;
}
  
  let stringTest = "Esta frase possui 4 letras A.";
  console.log(verifyLetterA(stringTest));
