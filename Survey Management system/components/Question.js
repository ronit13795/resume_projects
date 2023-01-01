import React, { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Question({
  question,
  index,
  name: namex = "",
  titleToSHow = "",
  choice1 = "",
  choice2 = "",
  choice3 = "",
  choice4 = "",
  answer = "",
  pageIndex,
  updateSurveyContext,
  deleteQuestion,
}) {
  const [name, setName] = useState(question.name || "");
  const [title, setTitle] = useState(question.title || "");
  const [choice_1, setChoice_1] = useState(question.choices[0] || "");
  const [choice_2, setChoice_2] = useState(question.choices[1] || "");
  const [choice_3, setChoice_3] = useState(question.choices[2] || "");
  const [choice_4, setChoice_4] = useState(question.choices[3] || "");
  const [correctAnswer, setCorrectAnswer] = useState(
    question.correctAnswer || ""
  );

  useEffect(() => {
    updateSurveyContext(
      pageIndex,
      index,

      {
        type: "radiogroup",
        name,
        title,
        choices: [choice_1, choice_2, choice_3, choice_4],
        correctAnswer,
      }
    );
  }, [name, title, choice_1, choice_2, choice_3, choice_4, correctAnswer]);

  return (
    <div className="container">
      <div className="question-container">
        <header>
          <h2>Question {index + 1} - Radiogroup Type</h2>
        </header>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Question's name"
          value={namex}
        />
        <input
          value={titleToSHow}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="What is the question"
        />
        <input
          value={choice1}
          onChange={(e) => {
            setChoice_1(e.target.value);
          }}
          placeholder="First option"
        />
        <input
          value={choice2}
          onChange={(e) => {
            setChoice_2(e.target.value);
          }}
          placeholder="Second option"
        />
        <input
          value={choice3}
          onChange={(e) => {
            setChoice_3(e.target.value);
          }}
          placeholder="Third option"
        />
        <input
          value={choice4}
          onChange={(e) => {
            setChoice_4(e.target.value);
          }}
          placeholder="Fourth option"
        />
        <input
          value={answer}
          onChange={(e) => {
            setCorrectAnswer(e.target.value);
          }}
          placeholder="Correct answer"
        />

        <button
          type="button"
          onClick={() => {
            deleteQuestion(pageIndex, index);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
