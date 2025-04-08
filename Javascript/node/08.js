function Person(firstname,lastName){
    this.firstname=firstname;
    this.lastName=lastName;
    console.log(new.target);
    this.printdata = ()=>{
        console.log(`name of person is ${this.firstname} ${this.lastName}`)
    }

   }

let person1 = new Person('Saurabh', 'Pawar')
//\\person1.printdata();


console.log(person1)