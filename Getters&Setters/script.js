class Animal { 
   constructor(name) { 
     this._name = name 
   } 
   fly() { 
     console.log("Mai ud rha hu") 
   } 
   get name() { 
     return this._name 
   } 
  
   set name(newName) { 
     this._name = newName 
   } 
  
 } 
  
 class Dog extends Animal { 
   bark() { 
     console.log("Barking Time!") 
   } 
 } 
  
 let a = new Dog("Snowe") 
 a.fly() 
 console.log(a.name) 
 a.name = "Shiro" 
 console.log(a.name) 
 let c = 07
  
 console.log(a instanceof Animal) 
 console.log(a instanceof Dog) 
 console.log(c instanceof Animal)
