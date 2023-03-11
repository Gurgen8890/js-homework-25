// homework 1 extands

class Flower {
  static quantity = 0;
  constructor(name, color, count, smell) {
    this.name = name;
    this.color = color;
    this.count = count;
    this.smell = smell;
    Flower.quantity += this.count
  }

}

class Rose extends Flower {

}

class Clove extends Flower {

}

class Tulip extends Flower {

}

class Carnations extends Flower {

}

class Chrysanthemum extends Flower {

}



let bouquet = [
  new Rose('Rose', 'red', 10, 'sweet'),
  new Clove('Clove', 'white', 8, 'beatifull'),
  new Tulip('Tulip', 'yellow', 3, 'nice')
]

let bouquet1 = [
  new Carnations('Carnations', 'pink', 9, 'dark'),
  new Chrysanthemum('Chrysanthemum', 'blue', 7, 'slowly'),
  new Clove('Clove', 'red', 5, 'sweet')

]

let bouquet2 = [
  new Rose('Rose', 'red', 10, 'sweet'),
  new Tulip('Tulip', 'yellow', 3, 'nice'),
  new Chrysanthemum('Chrysanthemum', 'blue', 7, 'slowly'),
]
console.log(Flower.quantity);



// homework 2 extends (public,protected)
class Vehicle {
  name;
  color;
  wheels;
  _speed;
  _horsewPower;
  #frame;
  #brakes;
  #wheelType;

}
class Car extends Vehicle {
  headlightColor;
  steeringWheel;
  _engine;
  #typeofDrive;

  set engine(value) {
    this._engine = value
  }
  get engine() {
    return this._engine
  }
  set horsewPower(value) {
    if (value > 1500) {
      value = `Avtomeqenayi maximal dziauj@ ${1500}`
    }
    this._horsewPower = value
  }
  get horsewPower() {
    return _horsewPower
  }
  set speed(value) {
    if (value > 800) {
      value = `Avtomeqenayi maximal aragutyun@ ${800}km/h`
    }
    this._speed = value
  }
  get speed() {
    return this._speed
  }
}
class Bike extends Vehicle {
  pedal;
  sitter;
  #transmisson;
  _speeds;
  set speed(value) {
    if (value > 50) {
      value = `hecanivi aragutyun@ ${50}km/h`
    }
    this._speed = value
  }
  get speed() {
    return this._speed
  }
  set horsewPower(value) {
    if (value > 70) {
      value = `Hecanivi max dziauj@ ${70}`
    }
    this._horsewPower = value
  }
  get horsewPower() {
    return _horsewPower
  }

  set speeds(value) {
    if (value > 7) {
      value = `hecaniv ${value}  skorost chuni`
    }
    this._speeds = value

  }
  get speeds() {
    return this._speeds
  }
}

let car = new Car()
car.color = "karmir"
car.steeringWheel = 1;
car.horsewPower = 1400;
car.color = "dexin"
car.headlightColor = "sev"
car.name = "mercedess"
car.wheels = 4
car.speed = 900
car.engine = 4.5
console.log(car);




let bike = new Bike()

bike.speeds = 10
bike.color = "sev"
bike.pedal = 2
bike.name = "rembo"
bike.wheels = 2
bike.sitter = 1
bike.horsewPower = 100
bike.speed = 40
console.log(bike);



class Scooter extends Vehicle {
  numberOfWheels;
  scooterWeight;
  _powerReserve;
  #maximumLoad

  get powerReserve() {
    return this._powerReserve
  }

  set powerReserve(value) {
    if (value > 20) {
      value = `Scooterov aravelaguyn@ karox enq ertevekel ${20}km`
    }
    this._powerReserve = value;
  }
  get maximumLoad() {
    return this.#maximumLoad;
  }

}

let scooter = new Scooter
scooter.powerReserve = 50
scooter.name = "Xiaomi"
scooter.color = "black"
scooter.numberOfWheels = 2
scooter.scooterWeight = 13
scooter.wheels = 4
console.log(scooter);






// // protected tesak@ taki gcikov e(_), set u get-ov petq e ashxatel
// //privatn el # aysinq inq@ vochmi tex baci ira mijic hasaneli che



// homework 3


class ArramSum extends Array {
  sum (){
    let count = 0;

    for (let i = 0; i < this.length; i++){
      if(typeof this[i] === "number"){
        count += this[i]
      }
    }
    return count
  }
}
let arramSum = new ArramSum(1,4,10,"1",5)
console.log(arramSum.sum());


 

//nuyn@ class construktorov

// class ArramSum extends Array{
//   constructor(value){
//       super(value)
//       this.value = value;
//       let count = 0;
//       this.sum = function sum (){
//           for (let index = 0; index < this.value.length; index++) {
//               const element = this.value[index];
//               if (typeof element==='number'){
//                   count += element;
                  
//               }
//           }
//           return count;


//       }
//   }
// }

// let arr = new ArramSum([6,10,'3',777, 35])
// console.log(arr.sum());




// homework 4

let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

String.prototype.toUpper = function () {
  let strArray = this.split(" ");

  strArray = strArray.map((str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  });

  return strArray.join(" ");
}


console.log(str.toUpper());