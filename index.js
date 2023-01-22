


//dom elements selector by IDs set in variables
const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');


const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let duration;

//calls class initiates the constructor
const timer = new Timer(durationInput, startBtn, pauseBtn, {


   

onStart(totalDuration){

    duration = totalDuration;

},

onTick(timeRemain){

                                          //to compute making the line aligned with the input value and stop exactly at 0
    circle.setAttribute('stroke-dashoffset', perimeter * timeRemain / duration - perimeter);
   



    // circle.setAttribute('stroke-dassarray',10);

    

},
onComplete(){


    console.log('complete')
}


});
