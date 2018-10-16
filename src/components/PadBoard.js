import React from 'react';
import DrumPad from './DrumPad';

export default props => {
  const board = props.sounds.map((sound, i) => {
    const { name, src, keyCode } = sound;
    return (
      <DrumPad 
        key={i} 
        id={name}
        name={String.fromCharCode(keyCode)} 
        src={src} 
        keyCode={keyCode} 
        keyPressed={props.keyPressed} 
      />
    )
  });
  return (
    <div className="pad-board">
      {board}
    </div>
  )
}