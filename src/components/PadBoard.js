import React from 'react';
import DrumPad from './DrumPad';

export default props => {
  const board = props.sounds.map((sound, i) => {
    const { name, src, keyCode } = sound;
    return (
      <DrumPad 
        key={i} 
        name={name} 
        src={src} 
        keyCode={keyCode} 
        keyPressed={props.keyPressed} />
    )
  });
  return (
    <div className="pad-board">
      {board}
    </div>
  )
}