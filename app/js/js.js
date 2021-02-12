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