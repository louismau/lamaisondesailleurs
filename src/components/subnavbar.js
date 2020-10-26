import React from 'react'
import { Link } from 'gatsby'

const SubNavbar = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
      maxWidth: 1200,
      padding: '0.75rem 1.0875rem',
      border: 'solid',
    }}>
    <p>La Maison des Ailleurs</p>
    <div 
      style={{
        display: 'flex',
        alignItems: 'center'
    }}> 
      <Link className='link' to='/accueil'>ACCUEIL</Link>
      <Link className='link' to='/formules'>FORMULES</Link> 
      <Link className='link' to='/hotes'>LES HOTES</Link> 
      <Link className='link' to='/contact'>NOUS CONTACTER</Link> 
      <Link className='btn btn-primary' to='/reservation'>RESERVER</Link> 
    </div>
  </div>
);

export default SubNavbar


