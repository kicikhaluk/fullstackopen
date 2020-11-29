import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Anectode from './components/Anectode';
import Title from './components/Title';
import './index.css';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const getRandomAnectode = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const anectodeVotesHandler = (index) => {
    const updatedPoints = [...points];
    updatedPoints[index] += 1;
    setPoints(updatedPoints);
  };

  const mostVotedAnecdote = points.findIndex(num => num === Math.max(...points));

  return (
    <>
      <Title>Anectode of the day</Title>
      <Anectode
        anectode={anecdotes[selected]}
        numOfVote={points[selected]}
        votable
        anectodeVoteHandler={() => anectodeVotesHandler(selected)}
        getAnectode={getRandomAnectode}
      />
      <Title>Anectode with the most votes</Title>
      <Anectode
        anectode={anecdotes[mostVotedAnecdote]}
        numOfVote={points[mostVotedAnecdote]}
      />
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
