/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo_movie.png'
import './App.css'

const APP_TITLE = 'Movie App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import MovieCard from './components/MovieCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            movies: undefined,
            search: ''
        }
    }


    render() {
        return (
            <div className="App">
                <nav>
                    <ul>
                        <li><a href="#"><img src={ logo } className="App-logo" alt="logo" /></a></li>
                        <li><a onClick={ this.fetchPopularMovie }>POPULAR MOVIES</a></li>
                        <li><a onClick={ this.fetchPlayingMovie }>NOW PLAYING</a></li>
                        <li><a onClick={ this.fetchUpcomingMovie }>UPCOMING MOVIES</a></li>
                        <li><a onClick={ this.fetchTopMovie }>TOP RATED MOVIES</a></li>
                    </ul>
                </nav>

                <div className="App-content">
                    <div className="center-align">

                        {/* button onClick event calls the fetchMovie method */ }
                        <div class="input-field">
                            <input type='text' value={ this.state.search } onChange={ this.handleChange } placeholder="Movie"/><br/>
                        </div>
                        <button onClick={ this.fetchMovie } className="waves-effect waves-light btn red">
                            Search
                        </button>
                        <br/><br/>
                        
                        

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="">
                            { this.displayMovieInfo() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    handleChange = ( event ) => {
        this.setState(
            {                
                search: event.target.value
            }
        )
    }

    //method triggered by onClick event of the "Movie ?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchMovie = async (event) => {
        event.preventDefault()
        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const movies = await get( ENDPOINTS.TMDB_API_URL+'/search/movie', {
                //YOU NEED TO PROVIDE YOUR API KEY HERE
                api_key: 'be6bc3ec0a2cba584357252e83e10a6d',
                query: this.state.search
            })

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */

            this.setState( {
                movies: movies.results            
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }

    //method triggered by onClick event of the "Popular Movie ?" button
    fetchPopularMovie = async (event) => {
        event.preventDefault()
        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const movies = await get( ENDPOINTS.TMDB_API_URL+'/movie/popular', {
                //YOU NEED TO PROVIDE YOUR API KEY HERE
                api_key: 'be6bc3ec0a2cba584357252e83e10a6d'
            })

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            this.setState( {
                movies: movies.results
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }


    fetchPlayingMovie = async (event) => {
        event.preventDefault()
        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const movies = await get( ENDPOINTS.TMDB_API_URL+'/movie/now_playing', {
                //YOU NEED TO PROVIDE YOUR API KEY HERE
                api_key: 'be6bc3ec0a2cba584357252e83e10a6d'
            })

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            this.setState( {
                movies: movies.results
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }


    fetchUpcomingMovie = async (event) => {
        event.preventDefault()
        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const movies = await get( ENDPOINTS.TMDB_API_URL+'/movie/upcoming', {
                //YOU NEED TO PROVIDE YOUR API KEY HERE
                api_key: 'be6bc3ec0a2cba584357252e83e10a6d'
            })

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            this.setState( {
                movies: movies.results
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }

    fetchTopMovie = async (event) => {
        event.preventDefault()
        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const movies = await get( ENDPOINTS.TMDB_API_URL+'/movie/top_rated', {
                //YOU NEED TO PROVIDE YOUR API KEY HERE
                api_key: 'be6bc3ec0a2cba584357252e83e10a6d'
            })

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            this.setState( {
                movies: movies.results
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }


    //handle display of the received movies object
    displayMovieInfo = () => {
        if ( this.state.movies) {
            const listMovies = this.state.movies
            return listMovies.map(
                function (movie){
                    return <MovieCard key={listMovies.indexOf(movie)} data={ movie }/>
                }
            )
        }

        return null
    }

}

export default App