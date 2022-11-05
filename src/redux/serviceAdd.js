import { CHANGE_SERVICE_FIELD } from './action';

const initialState = { name: '', price: '', };

function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};

    default:
      return state;
  }
}

export default serviceAddReducer;