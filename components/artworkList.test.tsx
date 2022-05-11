import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import user from '@testing-library/user-event'
import ArtworkList from './artworkList'

describe('<ArtworkList />', () => {
    it('renders items per page selection', () => {
        render(
            <Provider store={store}>
                <ArtworkList />
            </Provider>
        )

        const select = screen.getByRole('combobox')
        const options = screen.getAllByRole('option')
        expect(select).toBeInTheDocument()
        expect(options).toHaveLength(4)
        expect(select).toHaveValue('25')
    })
    it('change the value of item per page when user select', async () => {
        render(
            <Provider store={store}>
                <ArtworkList />
            </Provider>
        )

        //check the selector initial value
        const select = screen.getByRole('combobox')
        expect(select).toHaveValue('25')

        await user.selectOptions(select, '50')
        expect(select).toHaveValue('50')
    })
})