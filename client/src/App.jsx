import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
        Header
      </header>

      <Outlet />

      <footer>
        Footer
      </footer>
    </>
  )
}

export default App