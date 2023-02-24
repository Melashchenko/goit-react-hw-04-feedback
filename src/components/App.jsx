import { Box } from './Box';

import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);

  const feedbackOption = ['good', 'neutral', 'bad'];

  const handleTarget = e => {
    switch (e.currentTarget.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBed(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <Box p={10}>
      <FeedbackOptions
        options={feedbackOption}
        onLeaveFeedback={handleTarget}
      ></FeedbackOptions>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </Box>
  );
};
