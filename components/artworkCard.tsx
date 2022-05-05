import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SVG from './svg'
import noImage from '../public/images/noImage.jpeg'
import styles from './artworkCard.module.css'
import {addFavorite, getIsFavorite, removeFavorite} from '../redux/favorites'

interface Props {
    id: number,
    title: string,
    thumb: string
}

const ArtworkCard = (props: Props) => {
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
        <div className={styles.artworkCard}>
            <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                    <Link href={`/arts/${props.id}`}>
                        <Image
                            src={src}
                            height={500}
                            width={500}
                            alt={props.title}
                            onError={() => setSrc(noImage.src)}
                        />
                    </Link>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.cardInfo}>
                        <h4>{props.title}</h4>
                    </div>
                    <div className={styles.favoriteIcon} onClick={() => handleFavoriteClick(props.id)}>
                        {!favorite ? 'Add favorite' : 'Remove favorite'}
                        <SVG
                            name='HEART_ICON'
                            className={favorite ? ([styles.svgIcon, styles.favorite].join(' ')) : styles.svgIcon }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard