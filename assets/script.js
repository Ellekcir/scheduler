// JUMBOTRON TIME 
// Display today's day and date
var todaysDate = document.querySelector('#currentDay'); // moment().format('dddd, MMM Do YYYY');
todaysDate.textContent= moment().format('LLL');  // Delete the time using "LL"//$("#currentDay").html(todaysDate);
//makes a coloured jumbotron bg - $('header').css({'background-color' : 'aquamarine'})

//--------------------------------------------------------------------


//select'name form element by it's ' attribute and get its value
// var taskInput = $('textarea[name="tasks"]').val();
// console.log(taskInput);
// if (!taskInput) {
//     console.log("There is no tasks in your schedule."); 
// }

//--------------------------------------------------------------------

// if you wanted to add in a clear function button for the tasks - also like to local storage.
// $('textarea[name="tasks"]').val()
//$( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 
//Experienced developers sometimes use the shorthand $() for $( document ).ready()

$(document).ready(function () {
    //vw makes it responsive to the window.
    style="font-size: 8vw;"
    // saveBtn click event listener on click play function
    $(".saveBtn").on("click", function () {
        
        // Gets the values of the taskbar description in JQuery and the selected time block by capturing the "id" of the .time-block div
        var text = $(this).siblings(".taskBar").val();
        var time = $(this).parent().attr("id");

        // Saves the taskbar description and the timeblock to the local storage
        localStorage.setItem(time, text);
        console.log( text + " at " + time + " has been saved." );
    })});

    function trackTheTime() {
        //get current time and records from the hour that we are in changing the colour as per class "future", "present" or "past"
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
            var blockTime = parseInt($(this).attr("id"));
            console.log(blockTime < timeNow)
            // To check the time and add the classes for background indicators
           //removes and adds classes in relation to moment().hour(); which is the current time at the hour.
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }}
        
    )}
    
    // Get item from local storage if any when page is opened
//loops the local storage for each time-block.
    function getData() {
        for ( i= 10; i <= 17; i++) {
            console.log(i);

        $("#" + i + " .taskBar").val(localStorage.getItem(i))

        } 

       $("#09 .taskBar").val(localStorage.getItem("09"));
 }
    
  


    getData();
        console.log(getData);

    trackTheTime(); 
