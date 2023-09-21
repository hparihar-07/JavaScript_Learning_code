const createData = async (data) => { 
         let options = { 
                 method: "POST", 
                 headers: { 
                         "Content-type": "application/json" 
                 }, 
                 body: JSON.stringify(data), 
         } 
         let p = await fetch('https://jsonplaceholder.typicode.com/posts', options) 
         let response = await p.json() 
         return response 
 } 
  
 const getData = async (id) => { 
         let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id) 
         let r = await response.json() 
         return r 
 } 
  
 const mainFunc = async () => { 
         let data = { 
                 title: 'Anonymous', 
                 body: 'Welcome to the shell', 
                 userId: 7, 
         } 
         let data1 = await createData(data) 
         console.log(data1) 
         console.log(await getData(101)) 
 } 
  
 mainFunc()
