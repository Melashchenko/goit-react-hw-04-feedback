import { Box } from './Box';

import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  static defaultProps = { initialValue: 0 };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleTarget = e => {
    const target = e.currentTarget.name;

    this.setState(prevState => {
      return {
        [target]: prevState[target] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const {
      handleTarget,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Box p={10}>
        <FeedbackOptions
          options={keys}
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
  }
}
