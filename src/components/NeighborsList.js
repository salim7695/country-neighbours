import React from 'react'

const NeighborsList = ({ neighbors }) => {
  if (!neighbors.length) return <p>No groupings found</p>;

  return (
    <ul>
      { neighbors.map((neighbor) => <li key={neighbor[0]}>{`${neighbor[0]} and ${neighbor[1]}`}</li>) }
    </ul>
  );
}

export default NeighborsList;
