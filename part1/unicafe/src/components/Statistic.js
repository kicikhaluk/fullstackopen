import React from 'react';

const Statistic = ({ name, value, isPercantage = false }) => (
  <tr>
    <td>{name}</td>
    <td>{value} {isPercantage && '%'}</td>
  </tr>

);


export default Statistic;