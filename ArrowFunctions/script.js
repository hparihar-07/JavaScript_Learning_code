const greet = name => { 
   console.log("greeting" + " " + name) 
   console.log("hello") 
 } 
  
 const player = { 
   name: "Axel", 
   position: "Striker", 
   exp: 90, 
   show: function() {
     setTimeout(() => { 
       console.log(`Character name is ${this.name}\nThe position of player is ${this.position}`) 
     }, 2000) 
   } 
 } 
 greet("Alex") 
 console.log(player.name, player.exp) 
 player.show()
