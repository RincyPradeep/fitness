import React from 'react'
import {Link} from 'react-router-dom'

import {Stack} from '@mui/material'


const Navbar = () => {
  return (
    <Stack direction="row" 
           alignItems='center'
           px="20px"
           sx={{gap: {sm: '122px', xs: '40px' }, mt:{sm: '32px', xs: '20px' }}}>
        <h1>
            <Link to='/'>
                <img src={require('../assets/images/logo.png')} alt="logo" 
                     style={{width:'100px',height:'100px',margin:'0 20px'}} />
            </Link>
        </h1>
        <Stack direction="row"
               gap="40px"
               fontSize="24px"
               alignItems="flex-end"
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
            <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar