import React from 'react';
import Button from './Button';

const Anectode = ({ anectode, numOfVote, votable = false, anectodeVoteHandler, getAnectode }) => {

  let buttons = null;

  if (!votable && numOfVote === 0) {
    return <p>There isn't any voted anectode. Let's vote your favorite one.</p>
  }


  if (votable) {
    buttons = (
      <>
        <Button clicked={anectodeVoteHandler} text='Vote' />
        <Button clicked={getAnectode} text='Next Anectode' />
      </>
    );
  }

  return (
    <div>
      <p>{anectode}</p>
      <p>This anectode has {numOfVote} votes</p>
      {buttons}
    </div>
  );
};

export default Anectode;