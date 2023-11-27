function a() {
    var b = 10
    c()

    function c() {

    }
}
a();
console.log(b)

//c is lexical to a e 
//lexical = local Mmory+ lexical environment of parent
// a is lexical inside global scope 
//lexical = local Memory + lexical environment of parent
//lexical = local Memory + lexical environment of parent

console.log(b) // show undefined
console.log(c) //show err[ Cannot access 'c' before initialization]
console.log(a) //show err[ Cannot access 'a' before initialization]
let a = 10; //temporal dead zone
const c = 22; //temporal dead zone
var b = 100; //not in temporal dead zone
// var name1;
// var name1 = value1;
// var name1 = value1, name2 = value2;
var name1 = "a"
var name2 = { "a": "value2", "b": "value3", "c": "value4" };
var p4 = ["a", "b", "c"]
var p5 = [1, 2, 3]
const cars = ["Saab", "Volvo", "BMW"]; //array
var name3 = [name1, name2, p4]
    //name1= name2
console.log(name3)
console.log("type of nume1", typeof(name1))
console.log("type of p4", typeof(p4))
console.log("type of p5", typeof(p5))
console.log("type of cars", typeof(cars))
    // console.log(name2)
    // var name1 = value1, name2, /* …, */ nameN = valueN;
    //var a + b = 2 
    //console.log(a,b)

//block scope
var x = 1;
let y = 2;
const z = 3;

{
    var x = 2;
    let y = 4;
    const z = 5;
    console.log("inside bracket x var :", x) //inside bracket x var : 2
    console.log("inside bracket y let :", y); //inside bracket y let : 4
    console.log("inside bracket z const :", z); //inside bracket z const : 5
}
console.log("outside bracket var x :", x) //outside bracket var x : 2
console.log("outside bracket let y :", y); //outside bracket let y : 2
console.log("outside bracket const z :", z); //outside bracket const z : 3
//data hidding
let sector; {
    const angle = Math.PI / 3;
    const radius = 10;
    sector = {
        radius,
        angle,
        area: (angle / 2) * radius ** 2,
        perimeter: 2 * radius + angle * radius,
    };
    console.log(angle) //1.0471975511965976
}
console.log(angle) //not-define
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"
//closures

function x() {
    var a = 7;

    function y() {
        console.log(a) //7
    }
    y();
}
x();