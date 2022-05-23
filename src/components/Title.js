import React from 'react'
import { TitlePage } from './Styled'

const Title = ( {title, subtitle} ) => {
  return (
    <TitlePage>
      <h1>
      {title}
       </h1>
      <p>
       {subtitle}
       </p>
    </TitlePage>
  )
}

export default Title
