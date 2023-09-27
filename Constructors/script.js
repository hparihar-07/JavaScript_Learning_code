class ConcertTicket { 
   constructor(givenname, tktno, row) { 
     console.log("CONSTRUCTOR CALLED..." + givenname + " " + tktno) 
     this.name = givenname 
     this.tktno = tktno 
     this.row = row
   } 
  
   preview() { 
     alert(this.name + ": Your Ticket 🎫 number for concert is : " + this.tktno + " and your row is " + this.row) 
   } 
  
   submit() { 
     alert(this.name + ": Your Ticket number: " + this.tktno + " is assigned to " + this.row + " row. " ) 
   } 
  
   cancel() { 
     alert(this.name + ": Your Ticket is cancelled for Row  " + this.row) 
     this.row = "fourth"
   } 
 } 
  
 let alexForm = new ConcertTicket("Alex", 10, "third") 
 alexForm.preview() 
 alexForm.submit() 
 alexForm.cancel() 
 alexForm.preview()
