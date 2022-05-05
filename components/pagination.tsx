import ReactPaginate from 'react-paginate'
import styles from './pagination.module.css'

interface Props {
    pageCount: number,
    handlePageChange: (data: { selected: number }) => void
}

function Pagination(props: Props) {
    const { pageCount, handlePageChange } = props

    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={styles.pagination}
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            previousClassName={styles.pageItem}
            previousLinkClassName={styles.pageLink}
            nextClassName={styles.pageItem}
            nextLinkClassName={styles.pageLink}
            breakClassName={styles.pageItem}
            breakLinkClassName={styles.pageLink}
            activeClassName={styles.active}
        />
    )
}

export default Pagination