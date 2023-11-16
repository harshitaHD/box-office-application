import React from 'react'
import Navigation from './Navigation'
import Title from './Title'

{/*passing children prop to render the contents of Title.js */}
const MainPage = ( {children} ) => {
  return (
    <div style={ {
      display: "block"
    } }>
{/* Title and subtitle of main page*/}
    <Title title='Golden Castle' subtitle='Are you looking for a movie or an artist?'/>
    <Navigation />
    {children}
      
    </div>
  )
}

export default MainPage;
