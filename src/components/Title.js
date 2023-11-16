import React from 'react'
import { TitlePage } from './Styled'

const Title = ( {title, subtitle} ) => {
  return (
    <TitlePage> {/*TitlePage is styled component*/}
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
