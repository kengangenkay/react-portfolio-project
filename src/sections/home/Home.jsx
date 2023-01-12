import HeaderImage from '../../assets/header.png'
import './home.css'
import Social from './Social';
import Data from './Data';


const Home = () => {
  return (
    <main className="home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />

        </div>

        
      </div>
    </main>
  )
}

export default Home