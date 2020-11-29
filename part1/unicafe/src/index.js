import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Header from './components/Header';
import Statistics from './components/Statistics';
import './index.css';


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allReview, setAllReview] = useState(0);


  const reviewHandler = (identifier) => {
    if (identifier === 'good') {
      setGood(prevGood => prevGood + 1);
      setAllReview(prevAll => prevAll + 1);
    } else if (identifier === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
      setAllReview(prevAll => prevAll + 1);
    } else {
      setBad(prevBad => prevBad + 1);
      setAllReview(prevAll => prevAll + 1);
    }
  };

  return (
    <>
      <Header>Give Feedback</Header>
      <Button onClickHandler={() => reviewHandler('good')} text="good" />
      <Button onClickHandler={() => reviewHandler('neutral')} text="neutral" />
      <Button onClickHandler={() => reviewHandler('bad')} text="bad" />
      <Header>Statistics</Header>
      <Statistics good={good} allReview={allReview} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


