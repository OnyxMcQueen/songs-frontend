import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Spinner from './components/common/spinner/Spinner';

 const Home = React.lazy(() => import ('./components/Home'));
 const Nav = React.lazy(() => import ('./components/Nav'));
 const Songs = React.lazy(() => import ('./components/Songs'));
 const Song = React.lazy(() => import ('./components/Song'));
 const EditSong = React.lazy(() => import ('./components/EditSong'));
 const NewSong = React.lazy(() => import ('./components/NewSong'));
 const Error = React.lazy(() => import ('./components/Error'));

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
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
    </React.Suspense>
  );
}

export default App;
