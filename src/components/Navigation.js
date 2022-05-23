import React from 'react'
import { Link } from 'react-router-dom';
import { NavLinks } from './Styled';

const LINKS=[
    {to : '/', text:'Home'},
    {to: '/starred', text:'Starred'}
]

const Navigation = () => {
  return (
    <NavLinks>
      {
          LINKS.map( item =><li key={item.to}><Link to={item.to}>{item.text}</Link></li>)
      }
    </NavLinks>
  )
}

export default Navigation
