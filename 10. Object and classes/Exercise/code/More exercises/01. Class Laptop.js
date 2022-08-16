class Laptop {
  constructor(info, quality) {
      this.info = info;
      this.quality = quality;
      this.isOn = false;

      this.turnOn = () => {
          this.isOn = true;
          this.quality -= 1;
          return
      }
      this.turnOff = () => {
          this.isOn = false;
          this.quality -= 1;
          return
      }
      this.showInfo = () => {
          return JSON.stringify(info);
      }
      
  }

  get price(){
      return 800 - (this.info.age * 2) + (this.quality * 0.5);
  }

}

let info = {producer: "Lenovo", age: 1, brand: "Legion"};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.price);