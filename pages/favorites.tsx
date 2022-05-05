import styles from './favorites.module.css'
import { useAppSelector } from '../redux/hooks'
import { selectFavorites } from '../redux/favorites'
import ArtworkCard from '../components/artworkCard'

const Favorites = () => {
    const { favoriteCards } = useAppSelector(selectFavorites)

    return (
        <div className={styles.favoriteArtworks}>
            <div className={styles.artworkList}>
                { favoriteCards.length < 1 && <h2>No favorites added yet!</h2> }
                { favoriteCards.length > 0 && (
                    favoriteCards.map((fav) => (
                        <ArtworkCard key={fav.id} id={fav.id} title={fav.title} thumb={fav.thumb}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default Favorites