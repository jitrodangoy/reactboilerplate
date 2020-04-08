import React from 'react'
import { Link } from '@reach/router'

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation
