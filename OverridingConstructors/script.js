class Player { 
   constructor(name) { 
     console.log(`${name} - Player's constructor is here`) 
     this.name = name 
   } 
   login() { 
     console.log(`Player has logged in`); 
   } 
  
   logout() { 
     console.log(`Player has logged out`); 
   } 
  
   requestDrinks(drinks) { 
     console.log(`Player has requested ${drinks} drinks - Auto approved`) 
   } 
 } 
  
 class Forward extends Player { 
   constructor(name) { 
     super(name) 
     console.log(`This is a newly written constructor`) 
   } 
   goals(x) { 
     console.log(`Player has  ${x} goals`) 
   } 
   requestDrinks(drinks) { 
     super.requestDrinks(4) 
     console.log("One extra is granted") 
      console.log(`Player has requested ${drinks + 1} drinks (One extra)`) 
  
   } 
 } 
  
 let striker = new Forward("Axel") 
 striker.login() 
 striker.goals(3)
 striker.requestDrinks(3)
