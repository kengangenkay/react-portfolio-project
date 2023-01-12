import Navbar from './sections/navbar/Navbar';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Footer from './sections/footer/Footer';

const App = () => {
  return (
    <main>
      <Home/>
      <Navbar/>
      <About/>
      <Services/>
      <Portfolio/>
      <Footer/>
    </main>
  )
}

export default App