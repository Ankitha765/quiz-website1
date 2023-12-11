// Defining an array of quiz questions
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Denmark", "London", "Delhi"],
      correctAnswer: "Paris"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["9", "8", "7", "6"],
      correctAnswer: "7"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Neptune"],
      correctAnswer: "Jupiter"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1947", "1812", "1712"],
        correctAnswer: "1912"
    },
    {
        question: "How many sides does a triangle have?",
        options: ["4", "1", "2", "3"],
        correctAnswer: "3"
    }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
  // Hiding the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clearing previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Displaying the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Creating answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Adding click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Checking if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Updating the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // Ending the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculating the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Displaying the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h1>Congratulations!!!</h1>
    <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  // Adding event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);