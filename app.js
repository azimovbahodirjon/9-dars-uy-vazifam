// Masala-1
function getAverageAge(arr) {
    let ages = 0
    for (let i = 0; i < arr.length; i++) {
        ages += arr[i].age;
    }

    return ages / arr.length
}
const people = [
    { name: "Abdulaziz", age: 33 },
    { name: "Erkin", age: 22 },
    { name: "Temur", age: 34 },
    { name: "Sardor", age: 20 },
];
console.log(getAverageAge(people));

//Masala-2
const obj = [];

function getAverageAge(arr, age) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].age > age ? (arr[i].isMerried = true) : (arr[i].isMerried = false);
        obj.push(arr[i]);
    }

    return obj;
}
const people = [
    { name: "Abdulaziz", age: 33 },
    { name: "Erkin", age: 22 },
    { name: "Temur", age: 34 },
    { name: "Sardor", age: 20 },
];
console.log(getAverageAge(people, 25));

// Masala - 3

function getNameMaxMinAge(arr) {

    let maxAge = arr[0].age;
    let minAge = arr[0].age;
    let maxName = arr[0].name;
    let minName = arr[0].name;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].age > maxAge) {
            maxAge = arr[i].age;
            maxName = arr[i].name;
        }
        if (arr[i].age < minAge) {
            minAge = arr[i].age;
            minName = arr[i].name;
        }
    }

    return [maxName, minName];
}

const people = [
    { name: "Abdulaziz", age: 33 },
    { name: "Erkin", age: 22 },
    { name: "Temur", age: 34 },
    { name: "Sardor", age: 20 }
];

console.log(getNameMaxMinAge(people));




// MAsala-4
function groupByValues(obj) {
    let result = {};

    for (let key in obj) {
        let value = obj[key];
        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(Number(key));
    }

    return result;
}


console.log(groupByValues(input));


MAsala - 5

function mergeObjects(obj1, obj2) {
    let result = {};

    for (let key in obj1) {
        if (!(key in obj2)) {
            result[key] = obj1[key];
        }
    }

    for (let key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }

    return result;
}

const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };

console.log(mergeObjects(obj1, obj2));


MAsala - 2

function createSquaresObject(n) {
    let result = {};

    for (let i = 1; i <= n; i++) {
        result[i] = i * i;
    }

    return result;
}

const n = 5;
console.log(createSquaresObject(n));


// Masala - 3

function sumKeysAndValues(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    const sumKeys = keys.reduce((sum, key) => sum + Number(key), 0);
    const sumValues = values.reduce((sum, value) => sum + value, 0);

    return sumKeys + sumValues;
}

const obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

console.log(sumKeysAndValues(obj));

// MAsala-4
function createObjectFromStrings(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = arr[i].length;
    }

    return result;
}

const strings = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

console.log(createObjectFromStrings(strings));

// Masala-5
function calculateTotalPrice(obj) {
    const prices = Object.values(obj);
    const totalPrice = prices.reduce((sum, price) => sum + price, 0);
    return totalPrice;
}


console.log(calculateTotalPrice(products));

// Masala-8

function countOccurrences(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (result[num]) {
            result[num] += 1;
        } else {
            result[num] = 1;
        }
    }

    return result;
}