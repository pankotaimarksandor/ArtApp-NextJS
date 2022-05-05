import Link from 'next/link'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>Art Institute of Chicago</div>
            <div>
                <Link href='/'><a className={styles.link}>Artworks</a></Link>
                <Link href='/favorites'><a className={styles.link}>Favorites</a></Link>
            </div>
        </div>
    )
}

export default Header