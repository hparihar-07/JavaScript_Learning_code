class ConcertTicket { 
   submit() { 
     alert(this.name + ": Your ticket number for concert is : " + this.tno) 
   } 
   cancel() { 
     alert(this.name + ": This ticket number is not valid : " + this.tno) 
   } 
   fill(givenname, tktno) { 
     this.name = givenname 
     this.tno = tktno 
   } 
 } 
  

 let ErenForm = new ConcertTicket() 
 ErenForm.fill("Eren Yeager", 101) 
  
 let AxelForm = new ConcertTicket() 
 AxelForm.fill("Axel Blaze", 10)

 let AnnieForm = new ConcertTicket() 
 AnnieForm.fill("Annie", 222) 
  
 ErenForm.submit() 
 AxelForm.submit() 
 AnnieForm.submit() 
 AnnieForm.cancel()
