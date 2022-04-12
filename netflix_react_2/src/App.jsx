import { useState } from 'react'
import React, { useEffect } from 'react';
import tmdb from './tmdb.jsx'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import './App.css'
import Header from './components/Header';


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState();
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {

      // pegando a lista total //
      let list = await tmdb.getHomeList();
      setMovieList(list);

      // pegando o featured //
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)

    }
    loadAll()
  }, []);

  useEffect(() => {

    const scrollListener = () => {

      if (window.scrollY > 10) {
        setHeaderBlack(true)
      } else {
        setHeaderBlack(false)
      }

    }

    window.addEventListener('scroll', scrollListener);

    return () => {

      window.removeEventListener('scroll', scrollListener);
    }


  }, []);


  return (
    <div className='page'>

      <Header black={headerBlack} />

      {featuredData &&
        <FeaturedMovie  item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      {movieList.length <= 0 &&
        <div className='loading'>
            <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='carregando' width={400}></img>
        </div>
      } 

    </div>



  );

}

export default App