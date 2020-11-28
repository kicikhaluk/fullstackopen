import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';
import './index.css';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    partsDetail: [
      {
        partInfo: 'Fundamentals of React',
        exercisesInfo: 10
      },
      {
        partInfo: 'Using props to pass data',
        exercisesInfo: 7
      },
      {
        partInfo: 'State of a component',
        exercisesInfo: 14
      },
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content partsDetail={course.partsDetail} />
      <Total partsDetail={course.partsDetail} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


