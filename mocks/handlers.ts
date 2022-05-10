import { rest } from 'msw'
import { artworkApi } from '../apis/artworkApi'
import {mockedArtworkDetails} from './mocks'

export const handlers = [
    rest.get(`${artworkApi}/1234`, (req, res, ctx) => {
        return res (
            ctx.json(mockedArtworkDetails)
        )
    })
]