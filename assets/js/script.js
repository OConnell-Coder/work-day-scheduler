var buttonsAll = $(".saveBtn")
var textAreaAll = document.querySelectorAll(".description");
var savedSchedule = {};


function liveClock() {
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM DD, YYYY hh:mm:ss A'));
};
liveClock();
setInterval(liveClock, 1000);

var currentHour = dayjs().hour();


function changeColor() {
  for (var i = 0; i < textAreaAll.length; i++) {
    if (Number(textAreaAll[i].id) < currentHour) {
      textAreaAll[i].classList.remove("past", "present", "future");
      textAreaAll[i].classList.add("past");
    } else if (Number(textAreaAll[i].id) === currentHour) {
      textAreaAll[i].classList.remove("past", "present", "future");
      textAreaAll[i].classList.add("present");
    } else {
      textAreaAll[i].classList.remove("past", "present", "future");
      textAreaAll[i].classList.add("future");
    }
  }
};

changeColor();
setInterval(changeColor, 60000);


buttonsAll.on("click", function(event) {

  event.preventDefault();

  var buttonId = this.id;
  var textEntry = this.previousElementSibling.value;
        
  savedSchedule["hour"+buttonId] = textEntry;

  window.localStorage.setItem('localSchedule', JSON.stringify(savedSchedule));

});

var retrieveSchedule = JSON.parse(window.localStorage.getItem('localSchedule'));

console.log(retrieveSchedule);

//INSTRUCTIONS GIVEN:
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {
// });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.