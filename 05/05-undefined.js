// Number(undefined) -> NaN
// Number(null) => 0

let age;
console.log(age);
console.log(Number(age));
console.log(typeof (Number(age)));
console.log(+age);

let name = null;
console.log(name);
console.log(Number(name));
console.log(typeof (Number(name)));
console.log(+name);