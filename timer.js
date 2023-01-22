class Timer{

    constructor(durationInput, startButton, pauseButton, callbacks){
        //to refer 
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        

            //optional argument 
        if(callbacks){

            //just to run the if statement
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

                                                //to connect DOM element to method
        // this.startButton.addEventListener('click', this.start.bind(this)) 

                                                 //for arrow function
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {

        if(this.onStart){

            this.onStart(this.timeRemain);

        }

        //to start immediately on click
        this.tick();

        //  to be used across different method, use this instead of const
                this.interval = setInterval(this.tick, 25)
 
     

    }

    // why arrow function works? not normal function
    pause = () => {

        clearInterval(this.interval);
    }

    tick = () => {

        //to set the input value from user to decrease by 1 per second once the play button is clicked
       // set a variable then assign to variable from constructor(duration)

        if(this.timeRemain <= 0){


            this.pause();
            alert('Time is up!')
            if(this.onComplete){

                this.onComplete();

            };
        }

        else{


                            //string to decimal number
        // const timeRemain = parseFloat(this.durationInput.value);
        // this.durationInput.value = timeRemain - 1; 

    
        // const timeRemain = this.timeRemain;
        // this.durationInput.value = timeRemain - 1; 

        //set             //get
        
        this.timeRemain = this.timeRemain - .025;
        if(this.onTick){

            this.onTick(this.timeRemain);

        }
        }
    };



    //use getter & setter rather than calling parseFloat everytime tick() is instantiated
    get timeRemain(){
        return parseFloat(this.durationInput.value);

    }

    set timeRemain(time){

        this.durationInput.value = time.toFixed(2);

    }




    //for arrow function

    // start = () =>{

    //     this.importantMethodToCall();

    // }


}