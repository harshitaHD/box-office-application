import React, { useEffect, useState } from 'react'
import MainPage from '../components/MainPage'
import { useShows } from '../misc/Custom-hooks'
import { apiGet } from '../misc/Config';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {

  const[starred] = useShows();

  const[shows, setShows]=useState(null);
  const[isLoading, setIsLoading]=useState(true);
  const[error, setError]=useState(null)

useEffect( ()=>{
  if(starred && starred.length>0) {

    const promises= starred.map(showId => apiGet(`/shows/${showId}`))

    Promise.all(promises)
    .then(apiData => apiData.map(show =>( { show } )))
    .then(results =>{
      setShows(results)
      setIsLoading(false)
    }).catch(err =>{
      setError(err.message)
      setIsLoading(false)
    })
  }else{
    setIsLoading(false);
  }
} ,[starred])

  return (
    <MainPage>
      {isLoading && <div>Shows are still loading</div>}
      {error && <div>Error occured: {error}</div>}
      {!isLoading && !shows && <div>No Shows</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}

    </MainPage>
  )
}

export default Starred
