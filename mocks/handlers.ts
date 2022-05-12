import { rest } from 'msw'
import { artworkApi } from '../apis/artworkApi'
import {generateMockedArtworkCards, mockedArtworkDetails} from './mocks'

export const handlers = [
    rest.get(`${artworkApi}/1234`, (req, res, ctx) => {
        return res (
            ctx.json(mockedArtworkDetails)
        )
    }),
    rest.get(`${artworkApi}/?page=1&limit=25`, (req, res, ctx) => {
        const cards = generateMockedArtworkCards(25)
        return res (
            ctx.json({ artworkCards: cards, totalItems: 25 })
        )
    })
]