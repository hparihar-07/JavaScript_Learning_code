function returnFunc() { 
   const x = () => { 
     let a = 1 
     console.log(a) 
     const y = () => {
       console.log(a) 
       const z = () => {  
         console.log(a) 
       } 
       z() 
     } 
     a = 999 
     y() 
   } 
   return x 
 } 
  
 let a = returnFunc() 
 a()
