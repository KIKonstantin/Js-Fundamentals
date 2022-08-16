let person = { name: "Peter", age: 20 };
let keys = Object.keys(person);
console.log(keys);
for (let key of keys) {
    console.log(person[keys]);
}
/*
let person = {
  sayHello: function () {
    console.log("Hi, guys");
  }
};
let person = {sayHello() {(console.log('hi, guys'));}};

let person = {name: "peter", age: 20};
person.sayHello() = () => console.log('Hi, guys'); */ 