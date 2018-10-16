import { PAD_PRESS } from '../actions/types';

const initialState = {
  currentPad: null
}

const acceptedKeyCodes = [65, 67, 68, 69, 81, 83, 87, 88, 90];

export default (state = initialState, action) => {
  switch(action.type) {
    case PAD_PRESS:
      if (acceptedKeyCodes.some(keyCode => keyCode === action.payload)) {
        return {
          currentPad: action.payload
        }
      } else {
        return initialState;
      }
    default:
      return state;
  }
}