let { x, y } = { x: 3, y: 4 } 
 console.log(x, y) 
  
 // Spread Operator 
 let real = [3, 5, 8] 
 let copy = { ...real } 
 console.log(copy) 
  
 function sum(v1, v2, v3) { 
   return v1 + v2 + v3 
 } 
  
 console.log(sum(...real)) 
  
 let data = { 
   name: "Alex", 
   company: "Se7en", 
   address: "remote" 
 }
console.log({...data, name:"Jude", company: "Eight" })
console.log({ name: "Jude", company: "Eight", ...data }) 
