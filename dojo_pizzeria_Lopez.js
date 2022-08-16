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

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function pizzaRando() {
    var wildPizza = {};
    wildPizza.crustType = randomPick(crustType);
    wildPizza.sauceType = randomPick(sauceType);
    wildPizza.cheeses = [];
    wildPizza.toppings = [];
    for (var i = 0; i < getRandom(1, 4); i++){
        wildPizza.cheeses.push(randomPick(cheese));
    }
    for (var i = 0; i < getRandom(1, 4); i++){
        wildPizza.toppings.push(randomPick(toppings));
    }
    return wildPizza;
}
var pizzaW = pizzaRando();
console.log("For my pizza I would like ", pizzaW);