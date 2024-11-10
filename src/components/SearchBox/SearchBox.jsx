import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const query = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBlock}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
