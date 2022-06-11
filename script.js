/* Project 6: Build a three-question quiz.

Requirements:
-Create a Github repository for this project. 
-Create an HTML form with a three-question quiz
-Each question should have four multiple-choice answers to choose from.
-When the user submits the quiz, add a message underneath each question 
letting them know if they got it right/wrong (give them the correct answer).
-Send me the project for review and get started on the next project.
*/

//function for results
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
})
function quizResults() {
	if (document.getElementById("correct1").checked) {
		document.getElementById("q1").innerHTML = "You got it right!";
	} else {
		document.getElementById("q1").innerHTML = "Sorry, the correct answer is Rx7";
  }
  
  if (document.getElementById("correct2").checked) {
		document.getElementById("q2").innerHTML = "You got it right!";
	} else {
		document.getElementById("q2").innerHTML = "Sorry, the correct answer is Apple";
 }

  if (document.getElementById("correct3").checked) {
		document.getElementById("q3").innerHTML = "You got it right!";
	} else {
		document.getElementById("q3").innerHTML = "Sorry, the correct answer is Water";
  }
}
