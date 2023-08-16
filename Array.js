let nums = [1, 5, 7, 8, false, "Not Present"] 
 console.log(nums[0]) 
 console.log(nums[1]) 
 console.log(nums[2]) 
 console.log(nums[3]) 
 console.log(nums[4])
 console.log(nums[5]) 
 console.log(nums[6]) // Will be undefined because index 6 does not exist 
 console.log("The length of nums Array  is", nums.length) 
 // Adding a new value to the array 
 nums[6] = 07
 // Changing the value of an array 
 nums[0] = 0
 console.log("Changed Array = ", nums) 
 console.log(typeof nums)