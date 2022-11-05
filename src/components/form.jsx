import { addService, changeServiceField, editService, buttonEditService } from '../redux/actionCreators';

function Form( {item, buttonCancel, editElemId, dispatch} ) {

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addService(item.name, item.price));
    const intutName = e.target.querySelector('[name=name]');
    const intutPrice = e.target.querySelector('[name=price]');
    dispatch(changeServiceField(intutName.name, ''));
    dispatch(changeServiceField(intutPrice.name, ''));
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch(changeServiceField(name, value));
  }

  const handleClear = e => {
    const form = e.target.closest('.form');
    const intutName = form.querySelector('[name=name]');
    const intutPrice = form.querySelector('[name=price]');
    dispatch(changeServiceField(intutName.name, ''));
    dispatch(changeServiceField(intutPrice.name, ''));
    dispatch(buttonEditService(false));
  };

  const handleUpdate = e => {
    const form = e.target.closest('.form');
    const intutName = form.querySelector('[name=name]');
    const intutPrice = form.querySelector('[name=price]');
    dispatch(changeServiceField(intutName.name, ''));
    dispatch(changeServiceField(intutPrice.name, ''));
    dispatch(buttonEditService(false));
    dispatch(editService(editElemId, intutName.value, intutPrice.value));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        <span className="text-input">Название</span>
        <input className="input" type="text" name="name" required onChange={handleChange} value={item.name} />
      </label>
      <label className="label">
        <span className="text-input">Сумма</span>
        <input className="input" type="number" min="0" step="0.01" name="price" required onChange={handleChange} value={item.price} />
      </label>
      {buttonCancel ?
        <div>
          <button className="button_update" type="button" onClick={handleUpdate}>Обновить</button>
          <button className="button_clear" type="button" onClick={handleClear}>Очистить</button>
        </div>
      : <button className="button_save" type="submit">Сохранить</button>}
    </form>
  )
}

export default Form;