// // Masala-1
// function getAverageAge(arr) {
//   let totalAge = 0;

//   for (let i = 0; i < arr.length; i++) {
//     totalAge += arr[i].age;
//   }

//   return totalAge / arr.length;
// }

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// console.log(getAverageAge(people));

// //Masala-2
// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// for (let i = 0; i < people.length; i++) {
//   people[i].isMarried = people[i].age >= 25;
// }

// console.log(people);

// // Masala-3
// function getNameMaxMinAge(arr) {
//   let maxAge = arr[0].age;
//   let minAge = arr[0].age;
//   let maxName = arr[0].name;
//   let minName = arr[0].name;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].age > maxAge) {
//       maxAge = arr[i].age;
//       maxName = arr[i].name;
//     }
//     if (arr[i].age < minAge) {
//       minAge = arr[i].age;
//       minName = arr[i].name;
//     }
//   }

//   return [maxName, minName];
// }

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// console.log(getNameMaxMinAge(people));

// // MAsala-4
// function groupByValue(obj) {
//   let result = {};

//   for (let key in obj) {
//     let value = obj[key];

//     if (!result[value]) {
//       result[value] = [];
//     }

//     result[value].push(Number(key));
//   }

//   return result;
// }

// const input = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };

// console.log(groupByValue(input));

//MAsala-5
// function mergeWithoutCommonKeys(obj1, obj2) {
//     let result = {};

//     for (let key in obj1) {
//         if (!(key in obj2)) {
//             result[key] = obj1[key];
//         }
//     }

//     for (let key in obj2) {
//         if (!(key in obj1)) {
//             result[key] = obj2[key];
//         }
//     }

//     return result;
// }

// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };

// console.log(mergeWithoutCommonKeys(obj1, obj2));

// Masla-1
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],

//     toString: function() {
//         return `firstName: ${this.firstName}\n` +
//             `lastName: ${this.lastName}\n` +
//             `age: ${this.age}\n` +
//             `languages: ${this.languages.join(",")}\n` +
//             `friends: ${this.friends.join("+")}`;
//     }
// };

// console.log(me.toString());

// MAsala-2
// function createSquaresObject(n) {
//     let result = {};

//     for (let i = 1; i <= n; i++) {
//         result[i] = i * i;
//     }

//     return result;
// }

// console.log(createSquaresObject(5));\

// MAsala-3
// function sumKeysAndValues(obj) {
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);

//     const sumKeys = keys.reduce((sum, key) => sum + Number(key), 0);
//     const sumValues = values.reduce((sum, value) => sum + value, 0);

//     return sumKeys + sumValues;
// }

// const obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

// console.log(sumKeysAndValues(obj));

// // MAsala-4
// function createObjectFromStrings(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i]] = arr[i].length;
//     }

//     return result;
// }

// const strings = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// console.log(createObjectFromStrings(strings));

// Masala-5
// function sumPrices(obj) {
//   const prices = Object.values(obj);
//   const total = prices.reduce((sum, price) => sum + price, 0);
// }

// const products = {
//   Apelsin: 10000,
//   Olma: 12000,
//   Mandarin: 8000,
//   Banan: 20000,
// };

// console.log(sumPrices(products));