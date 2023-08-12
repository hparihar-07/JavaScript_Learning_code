let data = { 
   one : 1, 
   two: 2, 
   three: 3, 
   four: 4 
 } 
 // Problem No 1 
 for (let i = 0; i < Object.keys(data).length; i++) { 
   console.log("The value of " + Object.keys(data)[i] + " is " + data[Object.keys(data)[i]]) 
 } 
  
 // Problem No 2 
 for (let key in data) { 
    console.log("The value of " + key + " is " + data[key]) 
 } 
  
 // Problem No 3 
 alert("Problem 4");
 alert("Guess the correct number");
 let cn = 07 
 let i 
 while (i != cn) { 
   i = prompt("Enter a number") 
 } 
 console.log("You have entered a correct number") 
  
 // Problem No 4 
 const mean = (a, b, c, d) => { 
   return (a + b + c + d) / 4 
 } 
  
 console.log(mean(4, 5, 6, 7))