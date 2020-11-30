import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content partsDetail={course.partsDetail} />
      <Total partsDetail={course.partsDetail} />
    </div>
  );
};


export default Course;