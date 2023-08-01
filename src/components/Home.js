import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  function handleNew(){
    navigate('/songs/new')
  }

  return (
    <div className='container' style={{textAlign: "center", margin: "50px"}}>
      <div>
        <h1>Welcome to the Tuner App!</h1>
        <p className='small'> - An app where you can add any song ♩</p>
        <button onClick={handleNew} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Get Started</button>
      </div>
      <div style={{marginTop: "15px"}}>
        <img src='https://camo.githubusercontent.com/bac372992c395f13bbe611b2ef3cf30c196f13bf67be9d462d038368bacc7570/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f3454377a427a64654e45746a54685944576e2f67697068792e6769663f6369643d373930623736313134656530336566376638363034393261393038336437376638363139316137626633343030303263267269643d67697068792e6769662663743d67' alt='Hand scratching a record player' style={{borderRadius: "65px"}}/>
      </div>
    </div>
  )
}

export default Home