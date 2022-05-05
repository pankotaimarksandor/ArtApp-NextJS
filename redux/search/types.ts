export type SearchCard = {
    id: number,
    title: string,
    thumb: string
}

export type SearchState = {
    searchLoading: boolean,
    searchError: null | string,
    searchCards: Array<SearchCard>
}

export type SearchResponse = {
    searchCards: SearchCard[]
}