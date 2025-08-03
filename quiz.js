function checkAnswer() {
    const correctAnswer = "4"; // Expected correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "#dc3545";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// Add the event listener to the Submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

