// last name / first name
let firstName = 'Rice';
let lastName = "Patric";
let displayUserName = lastName + ', ' + firstName;
console.log(displayUserName);
let displayUserName2 = `${lastName}, ${firstName}`;
console.log(displayUserName2);

// Patric, Rice
console.log(displayUserName.charAt(1)); // a
console.log(displayUserName.indexOf('a')); // 1
console.log(displayUserName.indexOf('b')); // -1
console.log(displayUserName.replace('Patric', 'Tom')); // Tom, Rice
console.log(displayUserName.substring(0, 3)); // Pat
console.log(displayUserName.toLowerCase()); // ...
console.log(displayUserName.toUpperCase()); // ...
console.log("    Hello Tom      ".trim()); // Hello Tom