// Exercise 1
// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle = function (driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function (mph) {
        this.speed = mph;
        return this.driver + ' driving at ' + mph + ' miles per hour';
    };
};

var Car = new Vehicle('driver');

var Truck = new Vehicle('driver');

Truck.cargo = [];
Truck.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this;
};

Truck.unloadCargo = function () {
    return this.cargo.pop();
};

console.log(Car);
console.log(Truck);

// Exercise 2
// Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

var Trainer = new Person();
Trainer.name = 'Mary';
Trainer.age = 28;

Trainer.teach = function (subject) {
    return this.name + ' is now teaching ' + subject;
}

console.log(Trainer.teach('chemistry'));

// Exercise 3
// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

function Triangle(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
    this.type = 'triunghi'
}
const forma = {
    getType: function () {
        return this.type
    }
}

Triangle.prototype = forma;
Triangle.prototype.constructor = Triangle;

let triunghi = new Triangle(10, 18, 20);
triunghi.getPerimeter = function () {
    return this.a + this.b + this.c
}

console.log(triunghi.constructor);
console.log(forma.isPrototypeOf(triunghi));
console.log(triunghi.getType());
console.log(triunghi.getPerimeter());
