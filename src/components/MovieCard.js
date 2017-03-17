import React, { Component } from 'react'

import './WeatherCard.css'


class MovieCard extends Component {

    render() {

        const movie = this.props.data
        const poster = 'http://image.tmdb.org/t/p/w185/'
        const details = 'https://www.themoviedb.org/movie/'

            return (
                <div className="card horizontal">
                    <div className="card-image">
                        <img alt="poster" src={poster+movie.poster_path} />
                        
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="weather-data">
                                <p>
                                    <h2>{ movie.title}</h2>
                                </p>
                                <p>
                                    <i className="material-icons">info</i>
                                    <span>{ movie.overview}</span>
                                </p>
                                <p>
                                    <i className="material-icons">grade</i>
                                    <span>{ movie.vote_average } /10</span>
                                </p>
                                <p>
                                    <i className="material-icons">date_range</i>
                                    <span>Release date: { movie.release_date }</span>
                                </p>
                                <p>
                                    <span><a href={details+movie.id}>More details</a>&nbsp;</span>
                                    <span>&nbsp;<a href={details+movie.id+'/cast'}>See cast</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        
    }
}

export default MovieCard