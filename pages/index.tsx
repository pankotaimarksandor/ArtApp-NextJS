import type { NextPage } from 'next'
import Header from '../components/header'
import ArtworkList from '../components/artworkList'

const Home: NextPage = () => {
  return (
    <div>
        <ArtworkList/>
    </div>
  )
}

export default Home
