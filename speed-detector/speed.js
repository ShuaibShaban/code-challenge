
// This part of code prompts the user to test my code using and number.
function checkSpeed(){
    let speed = parseInt(document.getElementById("Speed").value)
    //If the speed is less than 70, then it return OK.
    
    if (speed<=70){
        
        document.getElementById("output").innerHTML = "OK"

    }
    
    //If the speed exceeds 70km/hr then the license gets suspended.
    
    
    // In order for the license to get suspended,it also checks the number of points that the speed of the car has exceeded with. 
    else{
        let demeritPoint = ((speed-70)/5)
        // console.log("demerit Points:" + demeritPoint)
        document.getElementById("output").innerHTML  = `Demerit Points: ${demeritPoint}`
        if (demeritPoint>12){
            document.getElementById("output").innerHTML  = `${demeritPoint} Driver is suspended`
        }
    }
}

