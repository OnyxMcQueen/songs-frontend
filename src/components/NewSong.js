import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewSong() {

    let url = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const [song, setSong] = useState({
        song_name: "",
        artist: "",
        album: "",
        song_time: "",
        is_favorite: false,
        song_image: ""
    });

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
        navigate(`/songs/`);
    }


    async function handleSubmit(e){
        e.preventDefault();
        try{
            await axios.post(`${url}/songs`, song);
            alert("You have successfully created a new song!");
            navigate(`/songs`);
        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <div style={{textAlign: "center", marginTop: "15px", marginLeft: "200px", marginRight: "200px", backgroundColor: "#f2f3f5"}}>
        <h1>Create a new song!</h1>
        <hr style={{marginLeft: "50px", marginRight: "50px"}}/>

        <form className='form' onSubmit={handleSubmit}>
            <div className='form-group mx-5'>
                <label htmlFor='song_name'>Song Name:</label>
                <input required type='text' className='form-control' id='song_name' value={song.song_name} onChange={handleTextChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='artist'>Artist:</label>
                <input required type='text' className='form-control' id='artist' value={song.artist} onChange={handleTextChange} />  
            </div>


            <div className='form-group mx-5'>
                <label htmlFor='album'>Album:</label>
                <input required type='text' className='form-control' id='album' value={song.album} onChange={handleTextChange}/>  
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='song_time'>Song Time:</label>
                <input required type='text' className='form-control' id='song_time' value={song.song_time} onChange={handleTextChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='is_favorite'>Favorite:</label>
                {" "}
                <input type='checkbox' id='is_favorite' checked={song.is_favorite} onChange={handleCheckBoxChange}/>  
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='song_image'>Add Song/Album image here:</label>
                {" "}
                <label style={{fontSize: "small"}}>(Warning! Image cannot be changed once used!)</label>
                <input required type='text' className='form-control' id='song_image' value={song.song_image} onChange={handleTextChange} placeholder='Please insert a valid image URL link' />
            </div>   

            <button onClick={handleBack} style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Go Back</button>
            <button type='submit' style={{borderRadius: "10px", padding: "5px", backgroundColor: "white", margin: "5px"}}>Submit</button>
            </form>
    </div>
  )
}

export default NewSong