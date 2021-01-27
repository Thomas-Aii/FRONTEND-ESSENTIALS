prompt("wat is je voornaam?")
        prompt("wat is je achternaam?")
        prompt("wat is je emailadres?")
        prompt("wat is je woonplaats?")


 
let leeftijd = prompt ("wat is je leeftijd");
let stemleeftijd = 17;
 
  // TRUE or FALSE
if(leeftijd >= stemleeftijd){
 //Als de gebruiker (bezoeker) 16 jaar dan wordt de achtergrond kleur van index.html een lichtblauwe kleur kleur
 
}
document.querySelector("body").style.backgroundColor = 'orange';
 
//TODO: input van gebruiker in obejct persoon opslaan, alle 5 eigenschappen erbij.
let persoon = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
 
   
};
console.log(persoon);
console.log(persoon.achternaam);
 
    
 
// let persoonelement = document.querySelector(".container")
// persoonelement.innerHTML = "Thomas Pos"
 
let mijnLeeftijd= prompt("wat is je leeftijd?");
let stemGerechtigheid= 18
let lichtblauwekleur= 16
let groenkleur= 17
let geelkleur= 19
if (persoon.leeftijd==stemGerechtigheid){
   // Als de gebruiker (bezoeker) 16 jaar dan wordt de achtergrond kleur van index.html een Lichtblauwe kleur
   document.querySelector("body").style.backgroundColor="gold"
}
 
if (mijnLeeftijd==lichtblauwekleur){
   document.querySelector("body").style.backgroundColor="lightblue"
}
if (mijnLeeftijd==groenkleur){
   document.querySelector("body").style.backgroundColor="green"
}
if (mijnLeeftijd==geelkleur){
   document.querySelector("body").style.backgroundColor="yellow"
}