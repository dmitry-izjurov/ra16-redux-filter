import { 
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  EDIT_SERVICE_ID,
  BUTTON_EDIT_SERVICE,
  FILTERING_SERVICE
} from './action';

export function addService(name, value) {
  return {type: ADD_SERVICE, payload: {name, value}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function editService(id, name, value) {
  return {type: EDIT_SERVICE, payload: {idEdit: id, nameEdit: name, priceEdit: value}};
}

export function buttonEditService(value) {
  return {type: BUTTON_EDIT_SERVICE, payload: {value}};
}

export function editServiceId(id) {
  return {type: EDIT_SERVICE_ID, payload: {id}};
}

export function filteringService(value, items) {
  return {type: FILTERING_SERVICE, payload: {valueFilter: value, items}};
}