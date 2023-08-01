import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Songs from './components/Songs';
import Song from './components/Song';
import EditSong from './components/EditSong';
import NewSong from './components/NewSong';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/songs' element={<Songs />}/>
        <Route path='/songs/:id' element={<Song />}/>
        <Route path='/songs/edit/:id' element={<EditSong />}/>
        <Route path='/songs/new' element={<NewSong />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
