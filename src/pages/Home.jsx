 import MovieCard from '../components/MovieCard.jsx'
 import {useState , useEffect} from "react";
 import { searchMovies,getPopularMovies } from '../services/api.js';
 import "../css/Home.css"

 function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try {
                const popularmovies = await getPopularMovies()
                setMovies(popularmovies)
            } catch (err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
 
    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    };


    return(
        <div className="home">
              <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value) }></input>
                <buttonn type="submit" className='search-button'> 🔍︎</buttonn>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => ( 
                (movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) || 
                 movie.release_date.startsWith(searchQuery) 
            ) &&
                <MovieCard movie={movie} key={movie.id}/> ))}
            </div>
        </div>
    )
 }

 export default Home