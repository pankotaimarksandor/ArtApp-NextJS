import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SVG from './svg'
import noImage from '../public/images/noImage.jpeg'
import styles from './artworkCard.module.css'
import {addFavorite, getIsFavorite, removeFavorite} from '../redux/favorites'

export interface ArtworkCardProps {
    id: number,
    title: string,
    thumb: string
}

const ArtworkCard = (props: ArtworkCardProps) => {
    const dispatch = useAppDispatch()
    const [src, setSrc] = useState<string>(props.thumb)
    //const favorite = useSelector((state) => state.favoriteReducer.favoriteIds.some(id => id === data.id))
    const favorite = useAppSelector(getIsFavorite(props.id))

    const handleFavoriteClick = (id: number) => {
        if(!favorite) {
            const details = { id: props.id, details: { id: props.id, title: props.title, thumb: props.thumb } }
            dispatch(addFavorite(details))
        } else {
            dispatch(removeFavorite({id: props.id}))
        }
    }

    return (
        <div role={'artworkCard'} className={styles.artworkCard}>
            <div className={styles.cardInner}>
                <div role={'imageContainer'} className={styles.cardTop}>
                    <Link href={`/arts/${props.id}`}>
                        <a>
                            <Image
                                src={src}
                                height={500}
                                width={500}
                                alt={props.title}
                                onError={() => setSrc(noImage.src)}
                                role={'artImage'}
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.cardInfo}>
                        <h4>{props.title}</h4>
                    </div>
                    <button className={styles.favoriteIcon} onClick={() => handleFavoriteClick(props.id)}>
                        {!favorite ? 'Add favorite' : 'Remove favorite'}
                        <SVG
                            name='HEART_ICON'
                            className={favorite ? ([styles.svgIcon, styles.favorite].join(' ')) : styles.svgIcon }
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard