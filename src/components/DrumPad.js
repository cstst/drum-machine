
import React, { Component } from 'react'

export default class DrumPad extends Component {
  constructor(props) {
    super(props)
    this.audio = React.createRef();
  }

  componentDidUpdate() {
    const { keyCode, keyPressed } = this.props;
    if (keyCode === keyPressed) {
      this.handleClick();
    }
  }

  handleClick = () => {
    const sound = this.audio.current;
    if (sound.paused) {
      sound.play();
    } else{
      sound.currentTime = 0
    }
  }

  render() {
    const { src, name } = this.props;
    return (
      <button 
        className="pad"
        onClick={this.handleClick}
      >
        <audio 
          ref={this.audio}
          src={src}
        />
        {name}
      </button>
    )
  }
}

