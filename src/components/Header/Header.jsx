import React from 'react'
import NavMenu from '../NavMenu'
import './styles.css'

function Header() {
  return (
    <header className="text-white d-flex justify-content-between align-items-center px-4 bg-primary fw-bold">
      <h3 className="m-0 ">MaisSaúde</h3>
      <div>
        <input className="search" type="search" placeholder="Pesquisar" />
        <button className="btn btn-outline-info">Pesquisar</button>
      </div>
      <NavMenu />
    </header>
  )
}

export default Header

// class="p-3 bg-dark text-white"

// return (
//   <header className="text-white d-flex justify-content-between align-items-center  bg-black px-1 fw-bold ">
//     {/* <h3 className="m-0">TODO</h3> */}
//     {/* <NavMenu /> */}
//   {/* </header> */}
// );

// m-0
