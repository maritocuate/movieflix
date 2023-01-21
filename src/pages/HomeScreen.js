//rfce
import React from 'react'
import Banner from '../components/Home/Banner'
import Nav from '../components/Home/Nav'
import Row from '../components/Home/Row'
import requests from '../api/Requests'

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title='Movieflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge='true'
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />
    </div>
  )
}

export default HomeScreen