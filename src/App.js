import React, { Component } from 'react';
import './App.scss';
import PadBoard from './components/PadBoard';
import bankOne from './bankOne';
class App extends Component {
  state = {
    curKey: null
  }
  componentDidMount() {
    document.addEventListener('keydown', e => {
      this.setState({ curKey: e.keyCode })
    });
  }
  render() {
    return (
      <div className="App">
        <PadBoard keyPressed={this.state.curKey} sounds={bankOne} />
      </div>
    );
  }
}

export default App;
