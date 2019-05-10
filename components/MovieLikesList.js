import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromLikes} from '../actions';
import {Link} from 'react-router-dom';
import MovieItem from './MovieItem';


class MovieLikesList extends Component {

  removeLike(movie) {
    this.props.removeFromLikes(movie);
  }

  render() {
    let likes = this.props.likes;
          return (
            <div>
              <Link to="/"><button className="btn btn-primary">Search Results</button></Link>
              <p className="directions">Here are the movies added to your Favorites list. If you want to remove a movie from the list,
              click the "Remove" button. If you want to read more details about the movie, click the "Read More" button which will take
              you to the <a href="https://www.themoviedb.org" target="_blank">online movie database</a> which contains further details.</p>
              <h3 className="likes-label">My Favorites</h3>
              {likes.map(like => {
                  return <MovieItem
                            key={like.id}
                            movie={like}
                            showLikeButton={false}
                            removeLike={this.removeLike.bind(this)}
                         />
              })}

            </div>
          );


  }

}

function mapStateToProps(state) {
  return {
    likes: state.likes
  }
}

export default connect(mapStateToProps, {removeFromLikes}) (MovieLikesList);
