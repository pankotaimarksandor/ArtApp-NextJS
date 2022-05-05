import { useState } from 'react'
import styles from './searchBar.module.css'

interface Props {
    onSearchHandler: (query: string) => void
}

const SearchBar = (props: Props) => {
    const [query, setQuery] = useState('')

    return (
        <div className={styles.searchBar}>
            <input
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='Search..'
            />
            <div className={styles.searchButton} onClick={() => props.onSearchHandler(query)}>
                Search
            </div>
        </div>
    )
}

export default SearchBar