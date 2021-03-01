// function showFirstMessage(text) {
//     alert(text);
//     let num = 20;
// }

// showFirstMessage("Hello World");


// let calc = function(a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b
console.log(calc(10, 5));
console.log(calc(8, 6));

function returnVar() {
    let num = 50;
    return num;
}

let anotherNum = returnVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

function learnJs(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnJs("JavaScript", function() {
    console.log("Я учу 3 урок!");
})


let options = {
    width: 1024,
    hight: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    background: "red"
};

delete options.bool;
 console.log(options);
 
for (let key in options) {
    console.log('Свойства ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift('1');
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (массив: " + mass + ")");
// });
// console.log(arr);

let mass = [1,3,4,6,7];
for (let key of mass) {
    console.log(key);
}


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["awe", "aefda", "pp", 'rqa'],
//     i = arr.join(', ');
//     console.log(i);

let arr = ["awe", "aefda", "pp", 'rqa'],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr);


let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);


