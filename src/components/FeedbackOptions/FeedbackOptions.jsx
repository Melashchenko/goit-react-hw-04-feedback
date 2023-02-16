import PropTypes from 'prop-types';
import React from 'react';
import { Button } from './FeedbackOptions.styled';
import { Section } from 'components/Section/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Pleas leave feedback">
    {options.map(option => (
      <Button
        type="button"
        key={option}
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>
    ))}
  </Section>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
