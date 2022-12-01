

// This part of my code I declare a function called speed and I assign to it a constant speed that it should not exceed.
// The speed limit should not exceed 70km/hr.


function Speed() {
    const speedLimit = 70;
   
  let speed = parseInt(document.getElementById("Speed").value)

  // This part of my code illustrates that if speed has not exeeded the constant speed limit then an additional point is awarded per km/hr covered.

  // Then if the speed has not exceeded the constant speed limit then it is okay to proceed.
  
    if (speed <= speedLimit + points) {
        document.getElementById("output").innerHTML = 'OK'
        reoutput
    }
  // To get the actual points covered by the motorist/driver  just do;

  
  //The actual speed that exceeds covered by the motorist/driver in km/hr subtract from the constant speed limit then divide by 5.


    const points = Math.floor((speed - speedLimit) / 5);

   // If the points exceeds 12, then the license possessed by the driver/motorist gets suspended. 


    if (points >= 12) 
    document.getElementById("output").innerHTML =("License suspended");
    else 
    document.getElementById("output").innerHTML =(5);
  }