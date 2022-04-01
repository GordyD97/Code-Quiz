// GIVEN I am taking a code quiz
// WHEN I click the start button
var quizStart = 
startBttn.addEventListener("click", function setTime(){
    var timeEl = document.querySelector(".time");
    var mainEl = document.getElementById("main");
    var secondsLeft = 120;
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + "time left in quiz";
            
            if(secondsLeft === 0) {
                    clearInterval(timerInterval)
                    sendMessage("Quiz-Over!")
            }
        }, 1000);
    }
    function sendMessage() {
        timeEl.textContent = "Quiz Over";
        
    }
    
    setTime();

});

    //I need to add an ---> "addEventListener" and connect it to the button 
        //create an #id or class for said button. 
            //create a css style for said button 

                //test button
                    //make button disapear after being clicked 



// THEN a timer starts and I am presented with a question
//create a timer 
        // *remember one seccond is "1000"* find the timer loop and work and test off of that 
            //code container for questions 
                //each button will be connected someway
                    //condititonal statements will be needed 
                        //definteley for loops 
                            //find a way to keep stacking question on top of eachother

                                                                                                                // var timeEl = document.querySelector(".time");
                                                                                                                // var mainEl = document.getElementById("main");
                                                                                                                // var secondsLeft = 20;
                                                                                                                // function setTime() {
                                                                                                                //     var timerInterval = setInterval(function() {
                                                                                                                //         secondsLeft--;
                                                                                                                //         timeEl.textContent = secondsLeft + "time left in quiz";
                                                                                                                        
                                                                                                                //         if(secondsLeft === 0) {
                                                                                                                //                 clearInterval(timerInterval)
                                                                                                                //                 sendMessage("Quiz-Over!")
                                                                                                                //         }
                                                                                                                //     }, 1000);
                                                                                                                // }
                                                                                                                // function sendMessage() {
                                                                                                                //     timeEl.textContent = "Quiz Over";
                                                                                                                    
                                                                                                                // }

                                                                                                                // setTime();
 //create questions 
    //assign right and wrong ansawers 
    // fill content of questiuons probably up to 30-35 lines for questions 
    //create a css style of question box.    



// WHEN I answer a question
    //correct or wrong counter goes up with ex:"wrong++" or "Correct++"
    // THEN I am presented with another question
        // the next question will appear
            //the user will be prompted to answer the  next question. 
                //the for loop needs to work to make this part seemless
                //the answer counter will need to work



    // WHEN I answer a question incorrectly
        //the wrong counter goes up wrong++

    //Timer needs to be working and functional to even get to here 

        // THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
//create a leaderboard page.
    //make the leaderboard page with local sotrage and end of script page
    //leader board list is centered in the screen or covering the whole quiz
        //th
    // make leader board list 
        // key words JSON parse string.ify

// ```






