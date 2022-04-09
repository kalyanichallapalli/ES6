import React from 'react'

function navbar() {
  return (
    <div>
        <ul>
            <link to="/"><li>Home</li></link>
            <link to="/dashbord"><li>Dashbord</li></link>
            <link to="/about"><li>About</li></link>

        </ul>
    </div>
  )
}

export default navbar;