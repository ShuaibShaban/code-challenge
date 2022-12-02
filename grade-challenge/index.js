// function declaration

function submit () { 
    
    
    let score = parseInt(document.getElementById("marks").value)
    
    // use of if and else if statements   


    // if the sore is grater than or it is exactly at 79 then that is grade 'A'
    
    if ( score >= 79){
   
    document.getElementById("grade").innerHTML = 'A'
    }

    // if score is greater than 60 or the actauk score is 60 then that is grade 'B'
 else if ( score  >=60 ){

    
    document.getElementById("grade").innerHTML = " B"
 }
 
 // if score is greater than 49 or the actual score is 49 then that is grade 'c'
 else if ( score  >=49){
    document.getElementById("grade").innerHTML = " C"
 
 } 

  // if score is greater than 40 or the actual score is 40 then that is grade 'D'
 else if ( score  >=40 ){

    document.getElementById("grade").innerHTML = "D" 
 
 }

  // if score is greater than 39 or the actual score is 39 then that is grade 'E'
 else if ( score  <= 39 ){
    document.getElementById("grade").innerHTML = 'E'
    
 }


}

