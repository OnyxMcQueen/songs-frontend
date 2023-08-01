import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate();
    function handleHome(){
        navigate('/');
    }

  return (
    <div style={{textAlign: "center", marginTop: "250px"}}>
        <h1>Whoops! It looks like that page doesn't exist ☹️</h1>
        <p> -Click the button to go to the home screen.</p>
        <button onClick={handleHome} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Take me home!</button>
    </div>
  )
}

export default Error