import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Songs() {

    let url = process.env.REACT_APP_API_URL;

    const [songs, setSongs] = useState([]);

    async function fetchSongs(){
        try{
            let result = await axios.get(`${url}/songs`);
            setSongs(result.data);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSongs();
    }, [])


  return (
    <div style={{textAlign: "center"}}>
        <h1>Song List</h1>

        <table className="table">
            <thead>
                <tr>
                <th scope="col">Favorite?</th>
                <th scope="col">Song Name</th>
                <th scope="col">Artist</th>
                <th scope="col">Album</th>
                </tr>
            </thead>
            <tbody>
                {
                    songs.map((song) => {
                        return(
                            <tr key={song.id}>
                                <th scope='row'>{song.is_favorite ? "⭐️" : "👎"}</th>
                                <td>{song.song_name}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td><Link to={`/songs/${song.id}`}><button style={{borderRadius: "10px", padding: "5px", borderStyle: "none"}}>View this song</button></Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Songs