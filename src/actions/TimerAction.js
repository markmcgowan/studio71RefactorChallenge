import { TIMER_VISIBILITY } from './types';

export const toggleTimer = (visibilityValue) => {
  return {
    type: TIMER_VISIBILITY,
    payload: visibilityValue,
  };
};
