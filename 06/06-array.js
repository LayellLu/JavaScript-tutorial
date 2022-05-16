// // 创建数组
// let arr1 = [];
// let arr2 = new Array();
// console.log(arr1);
// console.log(arr2);

// // 数组赋值
// let arr3 = [];
// arr3[0] = 1;
// arr3[1] = 2;
// arr3[2] = 3;
// arr3[4] = 5;
// arr3[5] = 6;
// console.log(arr3);
// console.log(arr3[3]);
// console.log(arr3[7]);

// // 创建时赋值
// let arr4 = new Array(3,4,5);
// let arr5 = [5,6,7];
// console.log(arr4);
// console.log(arr5);

// 数组通用方法
// const names = ['Gavin', 'Tom', 'Edward', 'Ida', 'Jack'];
// console.log("length:", names.length);
// console.log("push method:", names.push('Austin'));
// console.log("names", names);
// console.log("pop method:", names.pop());
// console.log("names", names);
// console.log("shift method:", names.shift());
// console.log("names", names);
// console.log("splice method:", names.splice(2, 2));
// console.log("names", names);
// console.log("join method:", names.join(", "));
// console.log("names", names);
// map filter
const users = [
    {
        name: 'Jack',
        age: 18
    },
    {
        name: 'Gavin',
        age: 16
    },
    {
        name: 'Tom',
        age: 16
    },
    {
        name: 'Anthony',
        age: 19
    }
];
// users.map((i) => {
//     if (i.age === 16) {
//         i.company = 'Baidu'; 
//     }
//     return i;
// });
const users2 = users.filter(i => i.age > 16);
console.log(users2);