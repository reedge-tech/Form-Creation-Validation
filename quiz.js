function checkAnswer() {
  const correctAnswer = "4";
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selectedOption) {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct answer!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Incorrect answer. The correct answer is ${correctAnswer}.`;
    feedback.style.color = "red";
  }
}

const submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener("click", checkAnswer);




