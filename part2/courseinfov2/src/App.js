import React from 'react';
import Course from './components/Course';


const App = () => {
  const course = [
    {
      id: 1,
      name: 'Half Stack application development',
      partsDetail: [
        {
          id: 1,
          partInfo: 'Fundamentals of React',
          exercisesInfo: 10
        },
        {
          id: 2,
          partInfo: 'Using props to pass data',
          exercisesInfo: 7
        },
        {
          id: 3,
          partInfo: 'State of a component',
          exercisesInfo: 14
        },
        {
          id: 4,
          partInfo: 'Redux',
          exercisesInfo: 11
        },
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      partsDetail: [
        {
          id: 1,
          partInfo: 'Routing',
          exercisesInfo: 3
        },
        {
          id: 2,
          partInfo: 'Middlewares',
          exercisesInfo: 7
        }
      ]
    },
  ];

  return (
    <>
      {course.map(course => <Course course={course} />)}
    </>
  );
}

export default App;
