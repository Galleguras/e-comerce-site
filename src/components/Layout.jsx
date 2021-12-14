import React from 'react'
import Nav from './Nav'
import SEO from './SEO'
const Layout = (props) => {
  return (
    <>
      <SEO />
      <Nav />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
