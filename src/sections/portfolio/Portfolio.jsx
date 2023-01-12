import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>
        Here are some of my latest solo projects
      </h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>
            Personal portfolio
          </h3>
          <p>
          Portfolio site, HTML, CSS, JAVASCRIPT, JQUERY were involved in this project. 
          There is an adaptive and mobile version. Javascript animation enabled.
          </p>
          <a href="https://kengangenkay.github.io/weisezstudio/" className='btn-pr' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>
            Contractor's website
          </h3>
          <p>
          Website for a contracting firm, adaptive using Grid, website created using HTML, 
          CSS, JAVSCRIPT, PHP, adaptive website, mobile version developed.
          </p>
          <a href="https://massest.ee/" className='btn-pr' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>
            Personal portfolio
          </h3>
          <p>
            Portfolio site of a web developer, HTML, CSS, JAVASCRIPT, 
            PHP are applicable, the site is adaptive, there is also a mobile version.
          </p>
          <a href="https://kengangenkay.github.io/kenganisss/" className='btn-pr' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>
            Software Store
          </h3>
          <p>
            An online store, software, this is not a big one-page project. 
            CSS, HTML, FLEX, JAVASCRIPT, PHP
          </p>
          <a href="https://kengangenkay.github.io/esshop/" className='btn-pr' target='_blank'>Live Demo</a>
        </article>
      </div>
      </section>
  )
}

export default Portfolio