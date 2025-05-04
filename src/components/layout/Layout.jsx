import React from 'react'
import Header from './Header'

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