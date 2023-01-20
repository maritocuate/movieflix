import React, { useState, useEffect } from 'react'
import './styles.scss'
import axios from '../../../api/axios'
import requests from '../../../api/Requests'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals)
          const getRandom = number => {
            return Math.floor(Math.random()*number-1)
          }
          setMovie(request.data.results[
            getRandom(request.data.results.length)
          ])
          return request
      }
      fetchData()
  }, [])

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + '...' : string
  }

  return (
    <header className='banner' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
    }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.name}</h1>
        
        <div className='banner__buttons'>
          <button className='banner__button btn-primary'>Play</button>
          <button className='banner__button btn-primary'>My List</button>
        </div>
        
        <div className='banner__description'>
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  )
}

export default Banner