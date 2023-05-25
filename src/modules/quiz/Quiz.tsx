import React, { useState } from "react";
import { Group, Text, Box, Card, Button, Radio } from "@mantine/core";
import quizLocale from "./locale";
import questions from "./components/data";
const Quiz = () => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect: boolean) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <Card className="App">
      <Group position="center">
        <Text size={28} weight={700} align="center">
          {quizLocale.title}
        </Text>
      </Group>

      <Text size={22} py={2} weight={700}>
        {quizLocale.score}
        {score}
      </Text>

      {showResults ? (
        <Box className="final-results" py={4}>
          <Text color="green" size={22} weight={700}>
            {quizLocale.finalResult}
          </Text>
          <Box>
            <Text weight={700}>
              {questions.length} {quizLocale.of} {score} {quizLocale.correct} -
              ({(score / questions.length) * 100}%)
            </Text>
            {score === 5 ? (
              <Text color="green" size={22} weight={700} py={4}>
                {quizLocale.perfectScore}
              </Text>
            ) : (
              <Text color="red" py={4} size={22} weight={700}>
                {quizLocale.notPerfect}
              </Text>
            )}
          </Box>

          <Button color="orange" onClick={() => restartGame()}>
            {quizLocale.restart}
          </Button>
        </Box>
      ) : (
        /* 5. Question Card  */
        <Box className="question-card">
          {/* Current Question  */}
          <Text>
            {quizLocale.question}: {questions.length} {quizLocale.of}{" "}
            {currentQuestion + 1}
          </Text>
          <Text size={"lg"} py={8} weight={700} className="question-text">
            {questions[currentQuestion].text}
          </Text>

          {/* List of possible answers  */}

          <Text component="ul" py={4} size="lg">
            {questions[currentQuestion].options.map((option) => {
              return (
                <Text
                  component="li"
                  size="lg"
                  py={8}
                  className="option"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                  sx={{ cursor: "pointer" }}
                >
                  {option.text}
                </Text>
              );
            })}
          </Text>
        </Box>
      )}
    </Card>
  );
};

export default Quiz;
