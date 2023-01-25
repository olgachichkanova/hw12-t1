import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchField } from '../slices';
const Skills = () => {
    const {items, loading, error, search} = useSelector(state => state.skills)
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const { value } = e.target;
        dispatch(changeSearchField({search: value}))
    }
    
    const hasQuery = search.trim() !== '';
    return(
        <Fragment>
            <div><input type="search" value={search} onChange={handleSearch} /></div>
            {!hasQuery && <div>Type something to search</div>}
            {hasQuery && loading && <div>searching...</div>}
            {error ? <div>Error occured</div> : <ul>{items.map(o => <li key={o.id}>{o.name}</li>)}</ul>}
        </Fragment>
    )
}

export default Skills;