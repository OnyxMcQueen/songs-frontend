import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditSong() {
    let url = process.env.REACT_APP_API_URL;

    const { id } = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        song_name: "",
        artist: "",
        album: "",
        song_time: "",
        is_favorite: false
    });

    async function fetchSong(){
        try{
            let result = await axios.get(`${url}/songs/${id}`);
            setSong(result.data);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSong();
    }, [])
    
    
    function handleTextChange(e){
        setSong({
            ...song,
            [e.target.id]: e.target.value,
        })
    }

    function handleCheckBoxChange(e){
        setSong({
            ...song,
            [e.target.id]: (!song.is_favorite),
        })
    }
    
    
    function handleBack(){
        navigate(`/songs/${id}`);
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await axios.put(`${url}/songs/${id}`, song);
            alert("Song has successfully been updated.");
            navigate(`/songs/${id}`);
        }
        catch(error){

        }
    }


  return (
    <div style={{textAlign: "center", marginTop: "15px", marginLeft: "200px", marginRight: "200px", backgroundColor: "#f2f3f5"}}>
        <h1>Edit Song</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-group mx-5'>
                <label htmlFor='song_name'>Song Name:</label>
                <input type='text' className='form-control' id='song_name' value={song.song_name} onChange={handleTextChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='artist'>Artist:</label>
                <input type='text' className='form-control' id='artist' value={song.artist} onChange={handleTextChange} />  
            </div>


            <div className='form-group mx-5'>
                <label htmlFor='album'>Album:</label>
                <input type='text' className='form-control' id='album' value={song.album} onChange={handleTextChange}/>  
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='song_time'>Song Time:</label>
                <input type='text' className='form-control' id='song_time' value={song.song_time} onChange={handleTextChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='is_favorite'>Favorite:</label>
                {" "}
                <input type='checkbox' id='is_favorite' checked={song.is_favorite} onChange={handleCheckBoxChange}/>  
            </div>   

            <button onClick={handleBack} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Go Back</button>
            <button type='submit' style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Submit</button>
        </form>
    </div>
  )
}

export default EditSong