import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectArtworkDetails } from '../../redux/selectedArtwork'
import { fetchSelectedArtwork, clearSelectedArtwork } from '../../redux/selectedArtwork'
import noImage from '../../public/images/noImage.jpeg'
import styles from  './artworkDetails.module.css'

const ArtworkDetails = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useAppDispatch()
    const { artworkDetails, loading, error } = useAppSelector(selectArtworkDetails)

    useEffect(() => {
        if(id) dispatch(fetchSelectedArtwork(Number(id)))

        return () => {
            dispatch(clearSelectedArtwork())
        }
    }, [id])

    const handleImageSrcOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement
        target.src = noImage.src
    }

    return (
        <div className={styles.artworkDetails}>
            {loading && <h2>Loading..</h2>}
            {!loading && error && <h2>{error}</h2>}
            {!loading && !error && Object.keys(artworkDetails).length > 0 && (
                <>
                    <div className={styles.sectionLeft}>
                        <div className={styles.artworkInfo}>
                            <div className={styles.listItem}>
                                <span className={styles.listText}>Artist:</span><br/>
                                <span className={styles.listText}>{artworkDetails.artist}</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.listText}>Title:</span><br/>
                                <span className={styles.listText}>{artworkDetails.title}</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.listText}>Department:</span><br/>
                                <span className={styles.listText}>{artworkDetails.department}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionRight}>
                        <img
                            src={artworkDetails.image}
                            alt={artworkDetails.artist}
                            onError={e => handleImageSrcOnError(e)}
                        />
                    </div>
                </>
            )}
            { !loading && !error && Object.keys(artworkDetails).length < 1 && <h2>No details found</h2> }
        </div>
    )
}

export default ArtworkDetails