/*"use strict" для строгого применения по всем правилам*/
"use strict"
var firstElement =1, secondElement = 2,
nextVar = 'next gen';
var first, second;
first = 3;
second = 2;
var result = first%second;
var test = 0;
test = test +1;
/* тоже самое*/
test++;
function A (first,second) {
    var result = first + second -2;
    Math.pow(result, 2);
    return 3;
}
var test = "test";
test = string("test Object");
var result = test + "s";
/* два деления*/
function calculateOrder(product) {
    var delivery = 0;

    if (delivery) {
        return product.price+delivery;
    } else {
        return product.price;
    }
}
/*несколько делений*/
function calculateOrder(product) {
    var delivery =2;
    switch (delivery) {
        case 0:
            console.log("samovyvoz")
            break;
        case 1:
            console.log ("ukrposhta")
            break;
        case 2:
            console.log("novaPoshta")
            continue;
        case 3:
            console.log("Meest express")
            break;
        default:
            console.log("neizvestno");                
    }
    return product.price;
}
/*логические операции*/
function calculateOrder(product) {
    var delivery =2;
    /*vse ok, vernet ok*/
    if (5>2){
        return "ok";
    }
    /*dazhe ne proverit*/
    if (5<2){
        return "ok";
    } 
    /*vse ok, система приводит тип данных, к первому значению*/
    if (false=="false"){
        return "ok";
    } }
    /* && - логическое "и"*/
    /* || - логическое "или"*/

var macbook = {
    name: "MacBook",
    price: 3.2
};
var orderPrice = calculateOrder(MacBook);
console.log(orderPrice);
/*область видимости*/
