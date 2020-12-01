import React from 'react';
import './styles.scss';

const Cube = () => {
  return (
    <div id="loading-outer">
      <div id="loading-inner">
        <div id="front" />
        <div id="back" />
        <div id="top" />
        <div id="bottom" />
        <div id="left" />
        <div id="right" />
      </div>
    </div>
  );
};

export default Cube;