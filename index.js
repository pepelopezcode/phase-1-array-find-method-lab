// code your solution here

function superbowlWin(obj){
   
    for(const item of obj){
      let objWin= obj.find(() => item.result === "W")   
      if (objWin !== undefined){
         return (item.year) 
      }
      
    }
    
    
}

const record = [
    { year: "2014", result: "N/A"},
   
    { year: "2013", result: "L"},
     { year: "2015", result: "W"},
    //...
  
]
superbowlWin(record)