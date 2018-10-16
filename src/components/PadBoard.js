import React from 'react';
import DrumPad from './DrumPad';

export default props => {
  const board = props.sounds.map((sound, i) => {
    return (<DrumPad key={i} name={sound.name} src={sound.src} keyCode={sound.keyCode} keyPressed={props.keyPressed} />)
  });
  return (
    <div className="pad-board">
      {board}
    </div>
  )
}