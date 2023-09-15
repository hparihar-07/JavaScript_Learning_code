let p1 = new Promise((resolve, reject) => { 
         setTimeout(() => { 
                 resolve("Value 1"); 
         }, 11000); 
 }); 
  
 let p2 = new Promise((resolve, reject) => { 
         setTimeout(() => { 
                 // resolve("Value 2"); 
                 reject(new Error("Error")); 
         }, 2000); 
 }); 
  
 let p3 = new Promise((resolve, reject) => { 
         setTimeout(() => { 
                 resolve("Value 3"); 
         }, 3000); 
 }); 
  
  p1.then((value) => { 
          console.log(value) 
  }) 
  
  p2.then((value) => { 
          console.log(value) 
  }) 
  
  p3.then((value) => { 
          console.log(value) 
  }) 
  
 let promise_all = Promise.reject(new Error("Hey")) 
 promise_all.then((value) => { 
         console.log(value) 
 })
