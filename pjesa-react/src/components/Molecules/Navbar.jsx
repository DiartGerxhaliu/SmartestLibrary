import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ listElem, pathName }) {
  return (
    <Box component="nav">
      <Link to={pathName}>
        <Box component="li" style={{
          textDecoration: 'none',
          listStyle: 'none'
        }}>
          {listElem}
        </Box>
      </Link>
    </Box>
  )
}

export default Navbar