import { useDispatch, useSelector } from 'react-redux'
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice'

export default function SearchBox() {
const selectNameFilter = useSelector(state => state.filters.name)

 const dispatch = useDispatch();
 
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));
}
    return (
        <div className={css.searchBlock}>
            <p>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={selectNameFilter} onChange={handleChange} />
        </div>
)
}