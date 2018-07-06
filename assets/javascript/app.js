$(document).ready(function(){
    // $('.simple-quiz').simpleQuiz();
});

/*******timer********/



    // function timeHandler() {
    //     setTimeout(fullTime, 1000 * 120);
    //     setTimeout(timeUp, 0);
    // }

    // function Handler() {
    //     return timeHandler;
    // }

    // $(body).on('click', Handler());

    // function timeAlert(timer)
    //     $('.timer').append(`<p>${timer}</p>`);
    //     console.log(timer);

    
    window.onload = function() {
        $('.simple-quiz').on("click", timer.start);

    }

    var intervalId;

    var clockRunning = false;

    var timer = {
        time: 2,

        reset: function() {
            timer.time = 2;

            $('.timer').text("2");
            console.log(time);
        },

        start: function () {
            if (!clockRunning) {
                intervalId = setInterval(timer.count, 1000);
                clockRunning = true;
            }
        },
        stop: function () {
            // clearInterval(intervalId);
            if (timer.count === 0 ){
                clockRunning = false;
                alert('Game Over');
            }

            
        },
        count: function() {
            timer.time--;
            $('.timer').text(timer.time);
        }
    }

    /*********submit and alerts******/

    
    $('#submitButton').on('click', function submitAnswer() {
        if($('#answer') === $('.correct')){
             alert("You are correct");
        } else {
            alert("try again")
        };
           
    });
    
