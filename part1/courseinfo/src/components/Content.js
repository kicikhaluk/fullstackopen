import React from 'react';
import Part from './Part';
const Content = ({ partsDetail }) => {

  return (
    <>
      {partsDetail.map(({ partInfo, exercisesInfo }) => (
        <Part partInfo={partInfo} exercisesInfo={exercisesInfo} />
      ))}
    </>
  );
};

export default Content;