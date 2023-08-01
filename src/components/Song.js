import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Song() {

let url = process.env.REACT_APP_API_URL;

let navigate = useNavigate();

 const { id } = useParams();

 const [song, setSong] = useState(null);

 async function fetchSong(){
    try{
        let result = await axios.get(`${url}/songs/${id}`);
        setSong(result.data);
    }
    catch(error){
        console.log(error);
    }
 }

 useEffect(() => {
    fetchSong();
 }, [])

 function handleBack(){
    navigate('/songs')
 }

 function handleEdit(){
    navigate(`/songs/edit/${id}`);
 }

 async function handleDelete(){
    try{
        await axios.delete(`${url}/songs/${id}`);
        alert('This song has been deleted');
        navigate('/songs');
    }
    catch(error){
        console.log(error)
    }
 }


  return (
    <div style={{textAlign: "center", marginTop: "15px", marginLeft: "200px", marginRight: "200px", backgroundColor: "#f2f3f5", borderRadius: "65px"}}>
        <h1>{song?.song_name}</h1>
        <img src={song?.song_image} alt="Album Cover for song" style={{height: "300px", width: "auto"}}/>
        <hr style={{marginLeft: "50px", marginRight: "50px"}}/>
        
        <div style={{}}>
            <p><span style={{fontWeight: "bold"}}>Artist: </span>{song?.artist}</p>
            <p><span style={{fontWeight: "bold"}}>Album: </span>{song?.album}</p>
            <p><span style={{fontWeight: "bold"}}>Favorite Song? </span>{song?.is_favorite ? "⭐️" : "👎"}</p>
            <p><span style={{fontWeight: "bold"}}>Song Length: </span>{song?.song_time}</p>
        </div>

        <button onClick={handleBack} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Go Back.</button>
        <button onClick={handleEdit} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Edit this song.</button>
        <button onClick={handleDelete} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px", color: "red"}}>Delete this song.</button>
    </div>
  )
}

export default Song