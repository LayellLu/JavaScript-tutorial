// console.log("" === 0);
// console.log("" == 0);

// let user;
// if (user === undefined && user === null)

// if (user);

// let condition = null;
// if(condition) {
//     console.log('Cannot invoked')
// }
// console.log(!!undefined)
// console.log(!!0)
// console.log(!!null)
// console.log(!!NaN)
// console.log(!!'')

let name = 'Tom';
let weight;
switch (name) {
    case 'Jack':
        weight = 180;
        console.log(`${name}'s weight is ${weight}`);
        break;

    case 'Tom':
        weight = 200;
        console.log(`${name}'s weight is ${weight}`);
        break;

    default:
        weight = 130;
        console.log(`${name}'s weight is ${weight}`);
        break;
}