// OOP
class Car {
    name = "Avanza"
    color = "black"
}

let mobil = new Car()
console.log(mobil) // Car { name: 'Avanza', color: 'black' }

// OOP Karakteristik

// ---------------------- Programmer Jaman Now

// Constractor Function => Class versi lama
// Property di Constractor Function
// Method di Constructor Function
// Parameter di Constructor Function

function Person(firstName, lastname) { // => pakai awalan kapital
    this.firstname = firstName;
    this.lastname = lastname ;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${firstName}`);
    }
}

const eko = new Person("Eko", "Nugraha")
eko.sayHello("Joko")

const budi = new Person("Budi", "Irawan")
budi.sayHello("Joko")

console.log(eko)
console.log(budi)

// Constructor Inheritance
function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, My name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const eko1 = new Manager("Eko", "Khanedy");
console.info(eko);

// Prototype
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

Person.prototype.sayBye = function (){
    console.info("Good Bye");
}

Person.prototype.run = function (){
    console.info(`${this.firstName} is running`);
}

const eko2 = new Person("Eko", "Khannedy");

const budi2 = new Person("Budi", "Nugraha");

console.log(eko);
console.log(budi);

eko.sayBye();
eko.run();

// Prototype Inheritance
function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

// Manager.prototype = Employee.prototype; // salah
Manager.prototype = Object.create(Employee.prototype); // benar

Manager.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
}

const employee = new Employee("Budi");
employee.sayHello("Joko");

const manager = new Manager("Eko");
manager.sayHello("Joko");

console.info(employee);
console.info(manager);

// Class
class Person {

}

const eko3 = new Person();
console.info(eko);

// Class Constructor
class Person {

    constructor(name) {
        // kode apapun
        console.info(`Membuat Person ${name}`);
    }

}

const eko4 = new Person("Eko");
const budi4 = new Person("Budi");
console.info(eko);

// Class properti
class Person {
    constructor(name) {
        this.name = name;
    }

}

const eko5 = new Person("Eko");
console.info(eko);
console.info(eko.name);

const budi5 = new Person("Budi");

// Class Method
class Person {

    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is ${this.name}`);
    }

}

const eko6 = new Person("Eko");
console.info(eko);
eko.sayHello('Joko');

const budi6 = new Person("Budi");
console.info(budi);
budi.sayHello('Joko');

// Class Inheritance
class Employee {
    sayHello(name) {
        console.info(`Hello ${name}, my name is employee ${this.name}`);
    }
}

class Manager extends Employee {
    sayHello(name) {
        console.info(`Hello ${name}, my name is manager ${this.name}`);
    }
}

const budi7 = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

const eko7 = new Manager();
eko.name = "Eko";
eko.sayHello("Joko");

console.info(budi);
console.info(eko);

// Class: Super Constructor
class Employee {

    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is employee ${this.firstName}`);
    }
}

class Manager extends Employee {

    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`);
    }
}

const budi8 = new Employee("Budi");
budi.sayHello("Joko");

const eko8 = new Manager("Eko", "Khannedy");
eko.sayHello("Joko");

console.info(budi);
console.info(eko);

// Class : Super Method
class Shape {
    paint(){
        console.info("Paint Shape");
    }
}

class Circle extends Shape{
    paint(){
        super.paint();
        console.info("Paint Circle");
    }
}

const circle = new Circle();
circle.paint();

// Class : Getter Setter
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

const eko = new Person("Eko", "Khannedy");
console.info(eko);
console.info(eko.fullName);

eko.fullName = "Budi Nugraha";
console.info(eko);


