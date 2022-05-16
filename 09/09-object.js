let person = {
    name: 'Jack',
    age: 18,
    sex: '男',
    teach(salary) {
        console.log(`${this.name}'s salary is ${salary}`)
    }
}
person.teach(16000);
console.log(person.teach);

// function connectUserNames(users) {
//     let connectedName = '';
//     users.map((user) => {
//         connectedName += `${user.name} `;
//     });
//     return connectedName;
// }
// console.log(connectUserNames([{
//     name: 'Jack',
//     age: 18
// }, {
//     name: 'Tom',
//     age: 20
// }, {
//     name: 'Gavin',
//     age: 22
// }]));

// function parseUser(user){
//     user.name = 'Tom';
//     return user;
// }
// console.log(parseUser({
//     name: 'Gavin',
//     age: 18
// }));

console.log(new Date())