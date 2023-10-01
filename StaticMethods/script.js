class Typer { 
   constructor(name) { 
     this.name = Typer.capitalize(name) 
   } 
   type() { 
     alert("Hey " + this.name + " is Typing") 
   } 
   static capitalize(name) { 
     return name.charAt(0).toUpperCase() + name.substr(1, name.length) 
   } 
 } 
  
 t1 = new Typer("Alexy") 
 t2 = new Typer("Maxxy")
 t1.type()
 t2.type()
