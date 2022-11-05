import { FILTERING_SERVICE, REMOVE_SERVICE } from './action';

const initialState = [];

function serviceListFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTERING_SERVICE:
      const {valueFilter, items} = action.payload;
      const filter = items.filter(service => (new RegExp(`${valueFilter}`, "gi")).test(service.name));

      if (valueFilter === '') return items
      else return filter;
    
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
      
    default:
      return state;
  }
}

export default serviceListFilterReducer;