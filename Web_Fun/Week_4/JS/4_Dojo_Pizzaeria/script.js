// Defining options for the Pizza
let crustOptions = ['deep dish', 'thin', 'hand tossed', 'galic butter']
let sauceOptions = ['tradition', 'marinara', 'no']
let cheeseOptions = ['provolone', 'cheddar', 'mozarella', 'feta', 'riccota', 'asiago']
let toppingOptions = ['pepperoni', 'ham', 'bacon', 'sausage', 'black olives', 'mushrooms', 'onions', 'pineapple','extra cheese']
let sizeOptions = ['large', 'medium', 'small']
let cornMealOptions = ['you want', 'no']


// Creating the Pizz Object
function pizzaOven(pizzaSize,crustType,sauceType,cheeses,toppings,cornMeal){
    let pizza = {}
    pizza.pizzaSize = pizzaSize
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    pizza.cornMeal = cornMeal
    pizza.info = function(){
        console.log(`
            This will be a ${this.pizzaSize} pizza with ${this.sauceType} sauce,
            you want ${this.cheeses} cheese, 
            ${this.toppings} for toppings, 
            it will be made with ${this.crustType} crust, and ${this.cornMeal} corn meal
        `);
    }
    return pizza
}


// Create an array to use in custom pizza obj
function createArray(...theArgs){
    let arr = []
    for(const arg of theArgs){
        arr.push(arg)
    }
    return arr
}


// Convert array to a string for the pizza info
function convertArrayToString(arr){
    let pizzaString = ''
    if(arr.length == 1){
        pizzaString += arr[0]
    } else {
        for(let i=0;i<arr.length;i++){
            if(i != arr.length-1){
                pizzaString += `${arr[i]}, `
            } else {
                pizzaString += `and ${arr[i]}`
            }
        }
    }
    return pizzaString
}


// Generate a random pizza
function pickRandom(arr,multipleChoices){
    let choiceList = []
    if(multipleChoices){
        arr.forEach(element => {
            let yesOrNo = Math.floor(Math.random()*2)
            if(yesOrNo==1){
                choiceList.push(element)
            }
        });
    } else {
        let choice = Math.floor(Math.random()*arr.length)
        choiceList.push(arr[choice])
    }
    return convertArrayToString(choiceList)
}


// Createing the Pizzas
let pizza_1 = pizzaOven(
        'large',
        'deep dish', 
        'traditional', 
        convertArrayToString(createArray('mozzarella')),
        convertArrayToString(createArray('peperoni','sausage')),
        "you want"
    )

let pizza_2 = pizzaOven(
        'small',
        'hand tossed', 
        'marinara', 
        convertArrayToString(createArray('mozzarella', 'feta')),
        convertArrayToString(createArray('mushrooms','olives','onions')),
        "no"
    )

let pizza_3 = pizzaOven(
        'large',
        'thin', 
        'traditional', 
        convertArrayToString(createArray('cheddar','provolone','mozzarella')),
        convertArrayToString(createArray('peperoni', 'bacon','sausage')),
        "no"
    )

let pizza_4 = pizzaOven(
    'large',
    'thin', 
    'traditonal', 
    convertArrayToString(createArray('mozzarella')),
    convertArrayToString(createArray('extra cheese')),
    "you want"
)

let pizza_5 = pizzaOven(
    pickRandom(sizeOptions,false),
    pickRandom(crustOptions,false),
    pickRandom(sauceOptions,false),
    pickRandom(cheeseOptions,true),
    pickRandom(toppingOptions,true),
    pickRandom(cornMealOptions,false),
)

let pizza_6 = pizzaOven(
    pickRandom(sizeOptions,false),
    pickRandom(crustOptions,false),
    pickRandom(sauceOptions,false),
    pickRandom(cheeseOptions,true),
    pickRandom(toppingOptions,true),
    pickRandom(cornMealOptions,false),
)


// Displaying the Pizza in console.log
pizza_1.info()
pizza_2.info()
pizza_3.info()
pizza_4.info()
pizza_5.info()
pizza_6.info()

for (const iterator of object) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}