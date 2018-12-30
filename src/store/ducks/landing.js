// Redux:
const ADD = 'ADD';

export const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
const INITIAL_STATE = []
const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

export default messageReducer;
