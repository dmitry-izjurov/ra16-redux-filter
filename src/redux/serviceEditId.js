import { EDIT_SERVICE_ID } from './action';

const initialState = '';

function serviceEditIdReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE_ID:
      const { id } = action.payload;
      return id;

    default:
      return state;
  }
}

export default serviceEditIdReducer;