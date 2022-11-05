import { combineReducers, compose, legacy_createStore } from 'redux';
import serviceListReducer from './serviceList';
import serviceAddReducer from './serviceAdd';
import servicebuttonEditReducer from './servicebuttonEdit';
import serviceEditIdReducer from './serviceEditId';
import serviceFilteringReducer from './serviceFiltering';
import serviceListFilterReducer from './serviceListFilter';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      serviceList: serviceListReducer,
      serviceAdd: serviceAddReducer,
      serviceEditId: serviceEditIdReducer,
      servicebuttonEdit: servicebuttonEditReducer,
      serviceFiltering: serviceFilteringReducer,
      serviceListFilter: serviceListFilterReducer
    }),
    undefined,
    compose(
      ReactReduxDevTools
    )
  )
}

export default configureStore;