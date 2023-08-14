let name = "Venom" 
 console.log(name.length) 
  
 console.log(name.toUpperCase()) 
 console.log(name.toLowerCase()) 
 console.log(name.slice(2, 4)) 
 console.log(name.slice(2)) 
 console.log(name.replace("Ven", "Per")) 
 let friend = "Lord" 
 console.log(name.concat(" is a friend of ", friend)) 
 let friend2 = "    Sam     "
 console.log(friend2) 
 console.log(friend2.trim()) 
 let fr = "Venom" + "Lord" + "Sam" 
 console.log(fr[0]) 
 console.log(fr[1]) 
 console.log(fr[2]) 
 console.log(fr[3])   
 console.log(fr) 
 //for loop to print a string
let str = "Hello world!"
for (let x=0;x<str.length;x++){
    console.log("String = ", str[x])
}