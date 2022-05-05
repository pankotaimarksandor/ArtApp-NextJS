import noImage from '../../public/images/noImage.jpeg'
import { GetServerSideProps } from 'next'
import { artworkApi } from '../../apis/artworkApi'
import styles from  './artworkDetails.module.css'

type ArtworkDetails = {
    artist: string,
    title: string,
    image: string,
    department: string
}

interface Props {
    artworkDetails: ArtworkDetails,
    error: string | null
}

const ArtworkDetails = (props: Props) => {

    const handleImageSrcOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement
        target.src = noImage.src
    }

    return (
        <div className={styles.artworkDetails}>
            {props.error && <h2>{props.error}</h2>}
            {!props.error && (
                <>
                    <div className={styles.sectionLeft}>
                        <div className={styles.artworkInfo}>
                            <div className={styles.listItem}>
                                <span className={styles.listText}>Artist:</span><br/>
                                <span className={styles.listText}>{props.artworkDetails.artist}</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.listText}>Title:</span><br/>
                                <span className={styles.listText}>{props.artworkDetails.title}</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.listText}>Department:</span><br/>
                                <span className={styles.listText}>{props.artworkDetails.department}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionRight}>
                        <img
                            src={props.artworkDetails.image}
                            alt={props.artworkDetails.artist}
                            onError={e => handleImageSrcOnError(e)}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const response = await artworkApi.get(`/${params?.id}`)
        if(response.data === null || response.data.data === null) {
            return { notFound: true }
        }

        const artwork = response.data.data

        const artworkDetails = {
            image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
            title: artwork.title,
            artist: artwork.artist_title,
            department: artwork.department_title
        }

        return { props: { artworkDetails, error: null } }

    } catch(error) {
        return { props: { artworkDetails: [], error: 'Something went wrong' } }
    }
}

export default ArtworkDetails