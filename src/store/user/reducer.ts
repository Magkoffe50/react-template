import actionTypes from './actionTypes';

const initialState = {
  darkMode: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE: {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};
