import React from 'react';

const Total = ({ partsDetail }) => {
  const totalExercises = partsDetail.reduce((acc, part) => acc + part.exercisesInfo, 0);

  return (
    <p>Number of Exercises {totalExercises}</p>
  );
};

export default Total;