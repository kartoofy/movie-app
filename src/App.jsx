import './css/App.css'
import MovieCard from './components/MovieCard.jsx'
import Favs from './pages/Favs.jsx'
import Home from './pages/Home.jsx'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from '../contexts/MovieContext.jsx'


function App() { //component, always starts with a CAP letter

  return (
    <MovieProvider>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Favs" element={<Favs/>}/>
      </Routes>
    </main>

   <footer className="footer">
  <p>
    Powered by @
    <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB </a>
  </p>
  <p>
    Created by @ 
    <a href="https://github.com/kartoofy" target="_blank" rel="noreferrer">kartoofy</a>
  </p>
</footer>


    </MovieProvider>
  )
}


export default App
