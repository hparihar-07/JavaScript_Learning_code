let global_data = "Everyone can use me 😁"
function noName() { 
  let local_data = "I'm here only for noName function bro 🔚"; 
  console.log(global_data) 
  console.log(local_data) 
} 

noName() 
console.log(global_data) 
// This will throw an error
console.log(local_data)
