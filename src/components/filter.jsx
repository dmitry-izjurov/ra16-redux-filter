import { filteringService } from '../redux/actionCreators';

function Filter( {items, filter, dispatch} ) {

  const handleFilter = e => {
    const {value} = e.target;
    dispatch(filteringService(value, items));
  }

  return (
    <div className="wrapper_filter">
      <label className="label">
        <span className="text-input">Фильтрация</span>
        <input className="input" type="text" name="filter" onChange={handleFilter} value={filter.value} />
      </label>
    </div>
  )
}

export default Filter;