import { FILTERING_SERVICE } from './action';

const initialState = '';

function serviceFilteringReducer(state = initialState, action) {
  switch (action.type) {
    case FILTERING_SERVICE:
      const { valueFilter } = action.payload;
      return valueFilter;

    default:
      return state;
  }
}

export default serviceFilteringReducer;