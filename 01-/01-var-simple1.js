// // ES2015 - ES6
(function test() {
    const x = 1;
    {
        const x = 2;
        console.log(x);
    }
    console.log(x);
})();

(function test() {
    let x = 1;
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
})();

 // Assignment to constant variable
const NAME = 'Susan';
name = 'Tom';

const user = {
    name: 'Susan'
}
user.name = 'Tom';
console.log(user)

const employee =  {
    name: 'Susan'
};
// employee = {
//     name: 'Tom'
// };
console.log(employee)

 //Cannot read properties of null (reading 'name')
const person = null;
console.log(person.name)


const human = undefined;
const human = {};
let human;
console.log(human)
