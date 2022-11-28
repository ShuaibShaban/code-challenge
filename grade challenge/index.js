// function declaration

function submit () { 
    
    
    let score = parseInt(document.getElementById("marks").value)
    
    // use of if and else if statements   
    
    if ( score >= 79){
   
    document.getElementById("grade").innerHTML = 'A'
    }
 else if ( score  >=60 ){
    
    document.getElementById("grade").innerHTML = " B"
 }
 

 else if ( score  >=49){
    document.getElementById("grade").innerHTML = " C"
 
 }
 else if ( score  >=40 ){
    document.getElementById("grade").innerHTML = "D" 
 
 }
 else if ( score  <= 39 ){
    document.getElementById("grade").innerHTML = 'E'
    
 }


}

