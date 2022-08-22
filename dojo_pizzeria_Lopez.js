function pizzaOven(crustTyp, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustTyp;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

var pizza3 = pizzaOven("keto", "spicy", "ricotta", ["pinapple", "bacon", "ham"]);

var pizza4 = pizzaOven("high rise", "alfredo", "vegan cheese", ["saussage", "pepper", "banna peppers"]);

// console.log(pizza1);//
console.log(pizza4);

//random pizza//

var crustType = ["deep dish", "hand tossed", "keto", "high rise"];
var sauceType = ["traditional", "marinara", "spicy", "alfredo"];
var cheese = ["mozzarella", "mozzarella", "feta", "vegan cheese", "pepper jack", "blue cheese", "4 chesses"];
var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "saussage", "pepper", "banna peppers", "pinapple", "bacon", "ham"];

function randomNums(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomItem(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza(){
    var pizzaR = {}
    pizzaR.crustType = randomItem(crustType);
    pizzaR.sauceType = randomItem(sauceType);
    pizzaR.cheese = randomItem(cheese);
    pizzaR.toppings = []
    for (var i = 0; i < randomNums(1, 4); i++){
        pizzaR.toppings.push(randomItem(toppings));
    }
    return pizzaR;
}

console.log(randomPizza());