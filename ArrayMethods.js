// Array Methods 
 let num = [1, 2, 3, 34, 4] 
 //toString() method
 let b = num.toString() // b is now a string  
 console.log("B = ",b)
 console.log("Type of b =", typeof b)
 //join method 
 let c = num.join(" and ") 
 console.log(c)
 console.log(typeof c) 
 //pop method
  let p = num.pop() // pop returns the popped element 
  console.log(num)
  console.log(p) 
  //push method
  let x = num.push(56) // push returns the new array length 
  console.log(num) 
  console.log(x)
  //shift() method
  let s = num.shift() 
  console.log(x, num) // Removes an element from the start of the array 
  //unshift method
 let r = num.unshift(78) 
 console.log(r, num) 
 console.log(r)

 let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
 let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19] 
 let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419] 
 //length method
 console.log(nums.length)
 //delete method 
 delete nums[0] 
 console.log(num.length) 
 // concat method
  let newArray = num.concat(num_more, num_even_more) 
  console.log(newArray) 
  
 // sort method 
  let compare = (a, b)=>{ 
   return b - a 
  } 
  num.sort(compare) 
  num.reverse() 
  console.log(num) 
  
 // Splice and Slice  
  let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025) 
  console.log(num) 
  console.log(deletedValues) 
  
 // let newNum = num.slice(3) 
 let newNum = num.slice(3, 5) 
 console.log(newNum)