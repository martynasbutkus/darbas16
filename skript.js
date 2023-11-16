// PIRMA UZDUOTIS
var legalAge = 20
var clientAge

var clientAge = prompt("Iveskite savo amziu")

if(clientAge >= legalAge){
    alert("Klientas pasiekes " + legalAge)
} else{
    var age = confirm(legalAge < clientAge)
    alert("Palaukite dar: "  +(legalAge - clientAge) + " metu(s).")
}



//Antra uzduotis
var fname = 'Martynas'

if(fname.length > 6 ){
    alert("Vardas per ilgas")
}



//Trecia uzduotis
var myAge = 15

if(myAge <= 0 || myAge >= 101){
    alert("Invalid age")
}

if(myAge >= 19){
    alert("Adult")
} else if(myAge <= 18){
    alert("Child")

}


var car = "Mini"

if(car == "VW" || car == "Bentley" || car == "Buggati" || car == "Lamborghini" || car == "Proshe" || car == "Audi"){
    console.log(car + " Priklauso VW group")
}else if( car == "BMW" || car == "Mini" || car == "Rolls-Royce"){
    console.log(car + " Priklauso BMW group.")
}else {
    console.log(car + " Nepriklausio nei vienam is prekes zenklu.")
}
