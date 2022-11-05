import { useDispatch, useSelector } from 'react-redux';
import Filter from './filter';
import Form from './form';
import Item from './item';

function Edit() {

  const item = useSelector(state => state.serviceAdd);
  const items = useSelector(state => state.serviceList);
  const buttonCancel = useSelector(state => state.servicebuttonEdit);
  const editElemId = useSelector(state => state.serviceEditId);
  const filter = useSelector(state => state.serviceFiltering);
  const filterList = useSelector(state => state.serviceListFilter);

  const dispatch = useDispatch();

  return (
    <>
      <div className="wrapper">
        <Filter items={items} filter={filter} dispatch={dispatch} />
        <div className="wrapper__form">
          <Form item={item} buttonCancel={buttonCancel} editElemId={editElemId} dispatch={dispatch}/>
          <ul>
            {filter === '' ? 
              items.map(o => <Item key={o.id} dispatch={dispatch} o={o} />) 
              : 
              filterList.map(o => <Item key={o.id} dispatch={dispatch} o={o} />)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Edit;
