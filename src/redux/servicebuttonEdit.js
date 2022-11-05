import { BUTTON_EDIT_SERVICE } from './action';

const initialState = false;

function servicebuttonEditReducer(state = initialState, action) {
  switch (action.type) {
    case BUTTON_EDIT_SERVICE:
      const {value} = action.payload;
      return value;

    default:
      return state;
  }
}

export default servicebuttonEditReducer;