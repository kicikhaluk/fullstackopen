import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, allReview, neutral, bad }) => {
  if (allReview < 1) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <Statistic name='good' value={good} />
        <Statistic name='neutral' value={neutral} />
        <Statistic name='bad' value={bad} />
        <Statistic name='all' value={allReview} />
        <Statistic name='average' value={((good - bad) / allReview).toFixed(2)} />
        <Statistic name='positive' value={((good / allReview) * 100).toFixed(2)} isPercantage />
      </tbody>
    </table>
  );
};


export default Statistics;