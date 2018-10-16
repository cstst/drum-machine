import React from 'react';
import bankOne from '../bankOne';
import DrumPad from './DrumPad';
import { connect } from 'react-redux';

const DrumMachine = props => {
  const { currentPad } = props;
  const display = bankOne.filter(sound => sound.keyCode === currentPad).map(sound => sound.name);
  const board = bankOne.map((sound, i) => {
    const { name, src, keyCode } = sound;
    return (
      <DrumPad 
        key={i} 
        id={name}
        name={String.fromCharCode(keyCode)} 
        src={src} 
        keyCode={keyCode} 
      />
    )
  });
  return (
    <div id="drum-machine">
      <div id="pad-board">
        {board}
      </div>
      <div id="display">
        <h1>{display}</h1>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ currentPad: state.currentPad }) 

export default connect(mapStateToProps)(DrumMachine)