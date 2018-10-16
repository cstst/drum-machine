import { PAD_PRESS } from './types';

export const padPress = input => {
  return {
    type: PAD_PRESS,
    payload: input
  }
}