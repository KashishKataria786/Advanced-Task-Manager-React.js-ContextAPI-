import React from 'react'
import Header from './Header.jsx'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main className='w-full mt-20'>
        {children}
    </main>
    </>
  )
}

export default Layout