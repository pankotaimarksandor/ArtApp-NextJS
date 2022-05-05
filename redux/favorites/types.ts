export type Details = {
    id: number,
    thumb: string,
    title: string
}

export type AddFavorite = {
    id: number,
    details: Details
}

export type RemoveFavorite = {
    id: number
}

export type FavoriteState = {
    favoriteCards: Array<Details>,
    favoriteIds: Array<number>
}