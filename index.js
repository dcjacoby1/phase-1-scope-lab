// Write your solution in this file!


//create variable bob
var customerName = "bob"

//function that upperCases customer name
 function upperCaseCustomerName(){
//takes current customer name and uppercases it
//changes the value of customer name, but doesn't return a value for function
//this means that if I console.log the function, I will get undefined - function has no value itself
//but if I console.log(customerName), I will get the uppercased value
   customerName = customerName.toUpperCase();
}

//global variable
var bestCustomer

//function changes name of best comer globally
function setBestCustomer(){ 
   bestCustomer = "not bob"
// return sets value to setBestCustomer as function,
// not needed for lab but good to know
   return bestCustomer
}
//setBestCustomer()
//var can access the inner scope
//now that setBestCustomer was called (assuming not commented out),
// if we console.log(bestCustomer), outside the function scope, it will still take on the value "bob"

function overwriteBestCustomer(){
   bestCustomer = "maybe bob"
   return bestCustomer
}

const leastFavoriteCustomer = "Jim"
function changeLeastFavoriteCustomer() {
   leastFavoriteCustomer = "Jack"
   return leastFavoriteCustomer
}
changeLeastFavoriteCustomer()
//const cannot access the inner scope
//even though changeLeastFavoriteCustomer was called
// if we console.log(leastFavoriteCustomer) outside of the function scope, it will keep the value "Jim"