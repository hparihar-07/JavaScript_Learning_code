let num = [3, 5, 1, 2, 4] 
//for loop
console.log("for Loop = ")
for(let i=0; i<num.length;i++){ 
 console.log(num[i]) 
} 
  
 // ForEach Loop 
 console.log("forEach Loop")
 num.forEach((element) => { 
   console.log(element * element) 
 }) 
  
 // Array.from 
 console.log("Array.from=") 
 let name = "HelloWorld" 
 let arr = Array.from(name) 
 console.log(arr) 
  
 // for...of  
 console.log("for..of loop = ")
 for (let item of num){ 
   console.log(item) 
 } 
  
 // for...in 
 console.log("for in loop = ")
 for (let i in num){ 
   console.log(num[i]) 
 }