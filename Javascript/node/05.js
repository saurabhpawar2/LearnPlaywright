let show = function() {
    console.log('Anonymous function');
};

show();

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 5000);

(
    function(num){
        console.log('hello',num)
    }
)(5);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// (function () {
//     console.log(person.firstName + ' ' + person.lastName);
// })(person);

function trialArg(){
    console.log(person.firstName + ' ' + person.lastName);
}

trialArg(person)