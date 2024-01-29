import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div>
        <button onClick={()=> setIsAdding(true)} className="rouns-button">Add Employee</button>
      </div>
    </header>
  )
}

export default Header
