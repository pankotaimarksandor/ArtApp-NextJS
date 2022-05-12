import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { artworksReducer } from '../redux/artworks'
import { selectedArtworkReducer } from '../redux/selectedArtwork'
import { favoriteReducer } from '../redux/favorites'
import { searchReducer } from '../redux/search'

const reducers = {
    artworks: artworksReducer,
    artworkDetails: selectedArtworkReducer,
    favorites: favoriteReducer,
    searchResult: searchReducer
}

function render(
    ui: any,
    {
        store = configureStore({ reducer: reducers }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}>{children}-</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }