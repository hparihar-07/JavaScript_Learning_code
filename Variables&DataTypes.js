/**  • Variables in Js
 •Variables can be declared by using var, let or const keywords
*/
//var can't be redeclared and updated within its scope
var myVar1 = 7;
console.log(myVar1);
const ign ="Lord";//declares a constant value
console.log(ign);
let myVar2 = 07;
console.log(myVar2);
//let can be updated but bot redeclared

/** DataTypes in Js
There are 7 primitive DataTypes in Js
      🔰 NN SS BB U 🔰
•Null      
•Number    
•String
•Symbol
•Boolean
•Big Int
•Undefined
*/
let a = null; 
let b = 345; 
let c = true; // can also be false  
let d = BigInt("567") + BigInt("3") 
let e = "Lord" 
let f = Symbol("I am a nice symbol") 
let g
//Objects in Js
const troop = {
  "pekka" : true,
  "dragon" : 7,
  "Warden" : false,
  "goblin" : null
}
console.log(troop["pekka"]);
