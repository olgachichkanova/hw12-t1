import { Fragment } from 'react'
const Skills = () => {
    const search=''
    const hasQuery = ''
    const loading = false;
    const error = null;
    const items = []
    const handleSearch = () => {

    }
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