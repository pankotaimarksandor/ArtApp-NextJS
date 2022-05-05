import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Pagination from './pagination'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchArtworksByPage, selectArtworks } from '../redux/artworks'
import ArtworkCard from './artworkCard'
import SearchBar from './searchBar'
import styles from './artworkList.module.css'
import { clearSearchCards, searchArtworksByQuery, selectSearch } from '../redux/search'

const ArtworkList: NextPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemLimit, setItemLimit] = useState<number>(25)
    const [pageCount, setPageCount] = useState<number>(0)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { artworkCards, loading, error, totalItems } = useAppSelector(selectArtworks)
    const { searchCards, searchLoading, searchError } = useAppSelector(selectSearch)

    useEffect(() => {
        const pageData = { page: currentPage, limit: itemLimit }
        dispatch(fetchArtworksByPage(pageData))
    }, [currentPage, itemLimit])

    useEffect(() => {
        setPageCount(Math.ceil(totalItems / itemLimit))
    }, [totalItems, itemLimit])

    const handlePageChange = (data: { selected: number }) => {
        setCurrentPage(data.selected + 1)
    }

    const onSearchHandler = (query: string) => {
        setIsSearching(true)
        dispatch(searchArtworksByQuery(query))
    }

    const closeSearchHandler = () => {
        setIsSearching(false)
        dispatch(clearSearchCards())
    }

    return (
        <div className={styles.artworkList}>
            <div className={styles.pagesController}>
                <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
                <SearchBar onSearchHandler={onSearchHandler}/>
                <div className={styles.select}>
                    Items per page:
                    <select className={styles.selector} value={itemLimit} onChange={(e) => setItemLimit(Number(e.target.value))}>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
            { isSearching && searchLoading && <h2>Searching..</h2> }
            { isSearching && !searchLoading && searchError && <h2>{searchError}</h2> }
            { isSearching && !searchLoading && !searchError && searchCards.length > 0 && (
                <>
                    <div className={styles.title}>Search results <span className={styles.span} onClick={closeSearchHandler}>Close</span></div>
                    <div className={styles.artworksList}>
                        {searchCards.map((art) => (
                            <ArtworkCard key={art.id} title={art.title} thumb={art.thumb} id={art.id}/>
                        ))}
                    </div>
                </>
            )}
            { isSearching && !searchLoading && !searchError && searchCards.length < 1 && (
                <>
                    <div className={styles.title}>No matches found<span className={styles.span} onClick={closeSearchHandler}>Close</span></div>
                </>
            )}
            <div className={styles.title}>All</div>
            <div className={styles.artworksList}>
                { loading && <h2>Loading..</h2> }
                { !loading && error && <h2>{error}</h2> }
                { !loading && !error && artworkCards.length > 0 && (
                    artworkCards.map((art, i) => (
                        <ArtworkCard id={art.id} title={art.title} thumb={art.thumb} key={art.id}/>
                    ))
                )}
                { !loading && !error && artworkCards.length < 1 && <h2>No artworks found</h2> }
            </div>
        </div>
    )
}

export default ArtworkList