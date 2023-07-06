import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

// 7ffed242

const API_URL = 'https://www.omdbapi.com?apikey=7ffed242';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search" 
                    onClick={() => {}}                   
                />
            </div>

            <div className="container">

            </div>
        </div>
    );
}

export default App;
