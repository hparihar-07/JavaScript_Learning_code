class Performers{ 
   constructor(name, skill) { 
     this.name = name 
     this.skill = skill
   } 
   sing() { 
     console.log(this.name + " is singing!") 
   } 
   dance() { 
     console.log(this.name + " is dancing!") 
   } 
 } 
  
 class Host extends Performers{ 
   host() { 
     console.log(this.name + " is hosting the show tonight") 
   } 
   hosted() { 
     console.log(`${this.name} has hosted the show tonight`) 
   } 
 } 
  
 let Alex = new Performers("Alex", "singing")
 let Naz = new Performers("Naz", "dancing")
 let Mark = new Host("Mark", "hosting") 
 
  
 Alex.sing() 
 Naz.dance()
 Mark.host() 
 Mark.hosted() 
