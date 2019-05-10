import React, {Component} from 'react';
import Search from './Search';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';
import {Link} from 'react-router-dom';


class MovieResults extends Component {

  render(){

    if (this.props.likes.length > 0) {

      return(
        <div>
          <p className="directions">To search movies, type a movie title in the search box below and select the submit button.
          To add movies to your favorites list, select the "Add to Favorites" in the description field. To view
          your list of favorites you selected, click the favorites button. To remove a movie from your favorites list, select the
          "Remove from favorites" button.</p>
          <Link to="/fav">
          <button className="btn btn-primary">Favorites</button>
          </Link>
          <hr />
          <Search />
          <div className={this.props.movies.length >= 1 ? 'show movie-results col-xs-12' : 'hide'}>
            {this.props.movies.map(movie => {
              let liked = false;
              for (let i = 0; i < this.props.likes.length; i++) {
                if (movie.id === this.props.likes[i].id) {
                    liked = true;
                }
              }
              return <MovieItem
                key={movie.id}
                movie={movie}
                showLikeButton={true}
                liked={liked}
                />

              })}
          </div>
        </div>
      );

    }
    else {
      return (
        <div>
            <Link to="/fav">
              <button className="btn btn-primary">Favorites</button>
            </Link>
            <p className="directions">To search for movies, type a movie title in the search box below and click the submit button.
            If you want to read additional details about the movie, click the "Read More" button which will take
            you to the <a href="https://www.themoviedb.org" target="_blank">online movie database</a> which contains further details.
            To add movies to your favorites list, click the "Add to Favorites" button in the description field. To view
            your list of favorites, click the "Favorites" button. To remove a movie from your favorites list, select the
            "Remove from Favorites" button.</p>
          <hr />
          <Search />
          <div className={this.props.movies.length >= 1 ? 'show movie-results col-xs-12' : 'hide'}>
            {this.props.movies.map(movie => {
              return <MovieItem
                key={movie.id}
                movie={movie}
                showLikeButton={true}
                />

            })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  //console.log("state " + state);
  return {
    movies: state.movies,
    likes: state.likes
  }
}

export default connect(mapStateToProps) (MovieResults);
