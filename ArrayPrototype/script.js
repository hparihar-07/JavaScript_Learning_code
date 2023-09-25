let a = { 
   name2: "hparihar07", 
   language: "JavaScript", 
   run: () => { 
     alert("Running this arrow function") 
   } 
 } 
 console.log(a) 
  
  
 let p = { 
   run: () => { 
     alert("this time running due to variable p") 
   } 
 } 
  
 p.__proto__ = { 
   name: "neuro" 
 } 
  
 a.__proto__ = p 
 a.run() 
 console.log(a.name)
