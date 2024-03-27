import "modern-normalize";
import "./index.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import React, { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification";

const App = () => {
  const options = ["good", "neutral", "bad"];

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const updateFeedback = (value) => {
    setFeedback((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    } else {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
  }, []);

  return (
    <>
      <Description />
      <Options
        options={options}
        feedback={feedback}
        updateFeedback={updateFeedback}
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
