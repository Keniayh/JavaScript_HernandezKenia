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
/////