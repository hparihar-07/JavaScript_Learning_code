// For in loop in Js 

let obj = { 
   player: "lord", 
   townhall: 8, 
   exp: 254, 
   ws: 3800, 
   troop: "pekka"
 } 
  
 for (let key in obj) { 
 console.log(key +"=>" + obj[key]);
 }