import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-light" style={{backgroundColor: "black"}}>
    <div className="container-fluid">
        <img src="https://static.vecteezy.com/system/resources/previews/000/421/044/original/music-note-icon-vector-illustration.jpg" style={{height: "60px", borderRadius: "5px"}} className="mx-2"/>
        <Link to='/' style={{textDecoration: 'none'}}><span className="navbar-brand mb-0 text-light" style={{fontSize: "50px"}}>Tuner</span></Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
           <Link to='/songs' style={{textDecoration: 'none'}}><li className="text-light">All songs</li></Link>
        </ul>
        <Link to='/songs/new'><button type="button" className="btn btn-light py-1 px-3" style={{color: "black", border: "1px solid white"}}>Create a new song</button></Link>
    </div>
    </nav>
  )
}

export default Nav