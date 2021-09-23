import Navbar from '../navbar/navbar'
import React from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <Navbar />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div >
          <div className="container">
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}