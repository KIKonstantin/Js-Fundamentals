function passwordValidator(input) {
  //manipulate a string to make a valid Password
  /* Password rules:;
    atleast 8 chars long;
    only letters, digits and "_";
    atleast one upperCase and atleast one lowercase;
    atleast one digit*/
  let originalPassword = input.shift();
  let line = input.shift();
  while (line !== "Complete") {
    let command = line.split(" ")[0];
    if (command === "Make") {
      let lowOrUp = line.split(" ")[1];
      let index = line.split(" ")[2];
      if (lowOrUp === "Upper") {
        let left = originalPassword.slice(0, index);
        let caseToUp = originalPassword
          .slice(index)
          .split("")
          .shift()
          .toUpperCase();
        index++;
        let right = originalPassword.slice(index);
        originalPassword = left + caseToUp + right;
        console.log(originalPassword);
      } else if (lowOrUp === "Lower") {
        let left = originalPassword.slice(0, index);
        let caseToDown = originalPassword
          .slice(index)
          .split("")
          .shift()
          .toLowerCase();
        index++;
        let right = originalPassword.slice(index);
        originalPassword = left + caseToDown + right;
        console.log(originalPassword);
      }
    } else if (command === "Insert") {
      let index = Number(line.split(" ")[1]);
      let char = line.split(" ")[2];
      if (index < 0) {
        break;
      } else {
        let left = originalPassword.slice(0, index);
        let right = originalPassword.slice(index);
        originalPassword = left + char + right;
        console.log(originalPassword);
      }
    } else if (command === "Replace") {
      let char = line.split(" ")[1];
      let value = Number(line.split(" ")[2]);
      let sum = Number(char.charCodeAt()) + value;
      sum = String.fromCharCode(sum);
      originalPassword = originalPassword.split(char).join(sum);
      console.log(originalPassword);
    } else if (command === "Validation") {
      let isUpper = false;
      let isLower = false;
      let isDigit = false;
      if (originalPassword.lenght < 8) {
        console.log(`Password must be at least 8 characters long!`);
      }
      for (let symbol of originalPassword) {
        if (symbol.charCodeAt() > 64 && symbol.charCodeAt() < 91) {
          isUpper = true;
        } else if (symbol.charCodeAt() > 96 && symbol.charCodeAt() < 123) {
          isLower = true;
        } else if (symbol.charCodeAt() > 47 && symbol.charCodeAt() < 58) {
          isDigit = true;
        } else if (
          !(symbol.charCodeAt() > 47 && symbol.charCodeAt() < 58) ||
          !(symbol.charCodeAt() > 64 && symbol.charCodeAt() < 91) ||
          !(symbol.charCodeAt() > 96 && symbol.charCodeAt() < 123) ||
          !(symbol.charCodeAt() === 95)
        ) {
          console.log(`Password must consist only of letters, digits and _!`);
          break;
        }
      }
      if(isUpper === false){
          console.log(`Password must consist at least one uppercase letter!`);
      }
      if(isLower === false){
          console.log(`Password must consist at least one lowercase letter!`);
      }
      if(isDigit === false){
          console.log(`Password must consist at least one digit!`);
      }
    }

    line = input.shift();
  }
}


passwordValidator(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete']);
