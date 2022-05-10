import { rest } from 'msw'
import { artworkApi } from '../apis/artworkApi'
import noImage from '../public/images/noImage.jpeg'

export const handlers = [
    rest.get(`${artworkApi}/1234`, (req, res, ctx) => {
        return res (
            ctx.json({
                data: {
                    data: {
                        image: noImage,
                        title: 'ResponseTitle',
                        artist: 'ResponseArtist',
                        department: 'ResponseDepartment'
                    }
                }
            })
        )
    })
]