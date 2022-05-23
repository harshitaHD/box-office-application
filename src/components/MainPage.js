import React from 'react'
import Navigation from './Navigation'
import Title from './Title'


const MainPage = ( {children} ) => {
  return (
    <div style={ {
      display: "block"
    } }>

    <Title title='Golden Castle' subtitle='Are you looking for a movie or an artist?'/>
    <Navigation />
    {children}
      
    </div>
  )
}

export default MainPage;
