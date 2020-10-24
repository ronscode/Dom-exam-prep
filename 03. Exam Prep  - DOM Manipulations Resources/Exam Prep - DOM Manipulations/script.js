class Car {
  constructor(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
  }
}


let myCar1 = new Car("Ford", 2014, "Hot Pink");
let myCar2 = new Car("Audi", 2019);

console.log(myCar1,myCar2 )

myCar2.color = "Purple";
console.log(myCar2)