let a = [ 
  "Initializing Hack tool...", 
  "Checking Available Networks...", 
  "...", 
  "Connection failed. Retrying...", 
  "Connecting to another server...", 
  "Connected Successfully...", 
  "Username Can't Hack Me...", 
  "Trying Brute Force...", 
  "20K passwords tried...", 
  "Match not found", 
  "Another 20K passwords tried...", 
  "Match not found...", 
  "Another 20K passwords tried...", 
  "Match not found...", 
  "Another 20K passwords tried...", 
  "Match found...",
  "Getting data...",
  "Accessing Account...", 
  "Hack Successful..." 
] 
  
const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(true) }, seconds * 1000)
    }) 
} 
  
const showHack = async (message) => {
  await sleep(2)
  text.innerHTML = text.innerHTML + message + "<br>" 
} 
  
(async () => { 
        for (let i = 0; i < a.length; i++) { 
                await showHack(a[i]) 
        } 
})()
