// Problem 1 
 let s1 = "Hello World!"
 console.log(s1.length) 
  
 // Problem 2 
 const sentence = 'I have been thinking Reminisce.'; 
 const word = 'Reminisce'; 
 console.log(sentence.includes(word)) 
 console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`); 
  
 // Problem 3 
 console.log(sentence.toLowerCase()) 
 console.log(sentence.toUpperCase()) 
  
 // Problem 4 
 let s2 = "Please give Rs 1000" 
 let amount = Number.parseInt(s2.slice(15)) 
 console.log(amount) 
 console.log(typeof(amount)) 
  
 // Problem 5 
 let friend = "Pekka" 
 friend[3] = "R" 
 console.log(friend)
 // friend is not changed, because string is immutable