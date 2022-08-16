function person(firstName, lastName, age) {
  // --- ВАРИАНТ 1 ---
  
    /*let result = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  return result;
  */
 // --- ВАРИАНТ 2 ---
  /*
  let result = {};
  
  result.fistName = firstName;
  result.lastName = lastName;
  result.age = age;
  
  return result;*/

  let result = {
      firstName,
      lastName,
      age
  };
  return result;
}
console.log(person("Peter", "Pan", "20"));
console.log("------------");
console.log(person("George", "Smith", "18"));
