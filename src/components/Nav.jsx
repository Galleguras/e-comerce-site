import React from 'react'
import {Link} from 'gatsby'

const navItems = [
  {caption: 'Home', href: '/'},
  {caption: 'Products', href: '/products'},
]

const Nav = () => {
  return (
    <header className='bg-blue-900 text-blue-100 sadow-md'>
      <nav>
        <ul className='flex'>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className='py-4 px-6 inline-block hover:bg-blue-700'
                  to={item.href}
                >
                  {item.caption}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
