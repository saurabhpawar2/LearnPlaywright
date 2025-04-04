let person = {
    firstName: 'John',
    lastName: 'Doe',
    // greet() {
    //     console.log('Hello, World!');
    // }
};

person.greet = function () {
    console.log('Hello!');
}

person.greet();

console.table(person)
console.log(person.greet)