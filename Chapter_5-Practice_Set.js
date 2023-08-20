// Chapter 5 Practice Set 
 // Practice Problem 1 
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 83] 
  let a = prompt("Enter a number") 
  a = Number.parseInt(a) 
  arr1.push(a) 
  console.log(arr1) 
  
 // Practice Problem 2 
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 83] 
  let b; 
  do { 
    b = prompt("Enter a number") 
    b = Number.parseInt(b) 
    arr2.push(b) 
  } while (b != 0); 
  console.log(arr2) 
  
 // Practice Problem 3 
  let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670] 
  let n = arr3.filter((x)=>{ 
    return x%10 == 0 
  }) 
  console.log(n) 
  
 // Practice Problem 4 
  let arr4 = [1, 2, 30, 4, 50, 6, 7, 83, 670] 
  let p = arr4.map((x)=>{ 
    return x*x 
  }) 
  console.log(p) 
  
 // Practice Problem 5 
 let arr5 = [1, 2, 3, 4, 5] 
 let q = arr5.reduce((x1, x2) => { 
   return x1 * x2 
 }) 
 console.log(q)