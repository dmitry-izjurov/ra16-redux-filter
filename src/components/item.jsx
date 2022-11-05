import { changeServiceField, removeService, buttonEditService, editServiceId } from '../redux/actionCreators';

function Item( {dispatch, o} ) {

  const handleRemove = id => { dispatch(removeService(id)) };

  const handleEdit = e => { 
    const item = e.target.closest('.item');
    const intutName = item.querySelector('.item_name');
    const intutPrice = item.querySelector('.item_price');
    dispatch(changeServiceField('name', intutName.textContent));
    dispatch(changeServiceField('price', intutPrice.textContent));
    dispatch(buttonEditService(true));
    dispatch(editServiceId(item.dataset.id));
  }

  return (
    <li className="item" data-id={o.id}>
      <span className="item_name">{o.name}</span>
      <span className="item_price">{o.price}</span>
      <div>
        <button className="button_edit" type="button" onClick={handleEdit}>Редактировать</button>
        <button className="button_remove" onClick={() => handleRemove(o.id)}>✕</button>
      </div>
    </li>
  )
}

export default Item;