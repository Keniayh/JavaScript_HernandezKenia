//--------------------------------------------------------------------------------
//                                Actividades 
//--------------------------------------------------------------------------------
//1.Personas
class Person {
    constructor(id, name, age, city, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.city = city;
        this.gender = gender;
    }
    displayDetails() {
        console.log("ID: " + this.id + ", Name: " + this.name + ", Age: " + this.age + ", City: " + this.city + ", Gender: " + this.gender);

    }
}


const person1 = new Person(1, "Natalia", 17, "Convención", "Female0");
const person2 = new Person(2, "Marco", 19, "Barranquilla", "Masculine");

person1.displayDetails();
person2.displayDetails();

//2.Rectangulo

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimetro() {
        return (2 * this.width) + (2 * this.height);
    }
    answer() {
        console.log("The area of rectangle: " + this.area() + ", The perimeter of rentangle: " + this.perimetro());
    }
}

const rectangle = new Rectangle(20, 10);

rectangle.answer()

//3.Carros

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log("Make: " + this.make + ", Made: " + this.model + ", Year: " + this.year);
    }
    
}

//subclass
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    displayDetails() {
        super.displayDetails();
        console.log("Nmber of doors: " + this.doors);
    }
}

const myCar = new Car("Toyota", "Camry", 2022, 4);
myCar.displayDetails();

//4. BankAccount

class BankAccount {
    constructor(number, balance) {
        this.number = number;
        this.balance = balance;
    }
    depositMoney(deposit){
        this.balance += deposit;
    }
    withdrawMoney(withdraw) {
        this.balance -= withdraw;
    }
    displayDetails() {
        console.log("Account Numer: " + this.number + ", Balance: " + this.balance);
    }
}

const account1 = new BankAccount(1993298737, 30000);
const account2 = new BankAccount(1272635662, 50000);


account1.depositMoney(100);
account2.withdrawMoney(100);

account1.displayDetails();
account2.displayDetails();

//5. 
class Figura {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
    displayDetails() {
        console.log(`Area: ${this.area()}`);
    }
}

class Circle extends Figura {
    constructor(radius) {
      super(radius * 2, radius * 2);
      this.radius = radius; 
    }
    area() {
      return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Figura {
    constructor(base, height) {
      super(base, height);
      this.base = base; 
      this.height = height; 
    }
    area() {
      return (this.base * this.height) / 2; 
    }
}

const circle1 = new Circle(10);
const triangle1 = new Triangle(10, 10);

circle1.displayDetails();
triangle1.displayDetails();

//6. 
class A {
    constructor(arg) {
      this.propiedadA = arg;
    }
}
  
class B extends A {
    constructor(arg) {
        super(arg);
    }
}

class C extends B {
    constructor(arg) {
        super(arg);
    }
}

const CC = new C("Hola");

console.log(CC.propiedadA); 
 