import React from 'react';

const Total = ({ partsDetail }) => {
  const totalExercises = partsDetail.reduce((acc, part) => acc + part.exercisesInfo, 0);

  return (
    <p><strong>Number of Exercises {totalExercises}</strong></p>
  );
};

export default Total;