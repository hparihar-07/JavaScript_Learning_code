async function weather() { 
         let eldiaWeather = new Promise((resolve, reject) => { 
                 setTimeout(() => { 
                         resolve("27 Deg") 
                 }, 2000) 
         }) 
  
         let shiganshinaWeather = new Promise((resolve, reject) => { 
                 setTimeout(() => { 
                         resolve("21 Deg") 
                 }, 5000) 
         }) 
  
         console.log("Fetching Eldia Weather Please wait ...") 
         let EldW = await eldiaWeather 
         console.log("Fetched Eldia Weather: " + EldW) 
         console.log("Fetching Shiganshina Weather Please wait ...") 
         let ShigW = await shiganshinaWeather 
         console.log("Fetched Shiganshina Weather: " + ShigW) 
         return [EldW, ShigW] 
 } 
  
 const waiting = async () => { 
         console.log("Hey I am waiting how much time you will take") 
 } 
  
 const main1 = async () => { 
         console.log("Welcome to weather control room") 
         let a = await weather() 
         let b = await waiting() 
  
 } 
 main1()
