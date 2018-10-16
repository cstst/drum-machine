
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { padPress } from '../actions';

class DrumPad extends Component {
  constructor(props) {
    super(props)
    this.audio = React.createRef();
  }

  componentWillMount() {
    document.addEventListener('keydown', e => {
      const { keyCode, padPress } = this.props,
            pressedKey = e.keyCode;
      if (keyCode === pressedKey) {
        padPress(pressedKey);
        this.handleClick();
      }
    })
  }

  handleClick = () => {
    const { keyCode, padPress } = this.props,
          sound = this.audio.current;
    padPress(keyCode);
    if (sound.paused) {
      sound.play();
    } else{
      sound.currentTime = 0
    }
  }

  render() {
    const { src, name, id } = this.props;
    return (
      <button 
        className="drum-pad"
        id={id}
        onClick={this.handleClick}
      >
        <audio 
          id={name}
          className="clip"
          ref={this.audio}
          src={src}
        />
        {name}
      </button>
    )
  }
}


export default connect(null, { padPress })(DrumPad)