import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToLikes, removeFromLikes} from '../actions';
const urlComponent = "https://image.tmdb.org/t/p/w1280/";
const movieUrl = "https://www.themoviedb.org/movie/";

class MovieItem extends Component {

  constructor(props){
    super(props);

    this.state = {
      liked: false
    };
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  add() {
    this.props.addToLikes(this.props.movie);
  }

  remove() {
    this.props.removeFromLikes(this.props.movie);
  }

  like() {
      return <button className="btn btn-primary" onClick={()=>this.add()}>Add to Favorites <span className="glyphicon glyphicon-heart-empty" title="like this"
      ></span></button>
  }

  unlike() {
      return <button className="btn btn-primary" onClick={()=>this.remove()}>Remove from Favorites <span className="glyphicon glyphicon-heart" title="liked"
      onClick={()=>this.remove()}></span></button>
  }

  removeLike() {
    //console.log('move to be removed: ' + this.props.movie);
    this.props.removeLike(this.props.movie);
  }

  getSummary() {

      let overview = this.props.movie.overview;
      let overview_length = this.props.movie.overview.length;

      if (overview_length > 200) {
        let cutoff_index = overview.indexOf(" ", 200)
        let shortened = overview.slice(0, cutoff_index) + " ...";
        return shortened;
      }
      else {
        return overview;
      }

  }

  render() {

    let displayed_poster;
    let movie_poster = this.props.movie.poster_path;
    if (movie_poster === null) {
      displayed_poster = <div className="not-available"><p>Movie poster not available</p></div>;
    }
    else {
      displayed_poster = <img src={urlComponent + this.props.movie.poster_path} alt={this.props.movie.title + " image"} />;
    }

      let movie_desc = this.props.movie.overview;
      let displayed_desc;
      if (movie_desc === '') {
        displayed_desc = <i>(Movie description not available)</i>;
      }

      if (movie_desc !== '') {
        displayed_desc = this.getSummary();
      }

    let release_date = this.props.movie.release_date;
    let displayed_rel;
    if (release_date === '') {
      displayed_rel = <i>(Movie release date not available)</i>;
    }

    if (release_date !== '') {
      displayed_rel = release_date;
    }

    return (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div id={this.props.movie.id} className="thumbnail">
                <a href={movieUrl + this.props.movie.id} target="_blank">{displayed_poster}</a>
                <div className="caption">
                  <h3>{this.props.movie.title}</h3>
                  <div className="summary">
                    <p>
                    {displayed_desc}
                    </p>
                    <p className="read-more-link-container">
                      <a href={movieUrl + this.props.movie.id} className="read-more-link" target="_blank">Read More &gt; &gt;</a>
                    </p>
                  </div>
                  <p>Release Date - {displayed_rel}</p>
                  <p>Rating -  <span className="badge badge-info"><span className="glyphicon glyphicon-star">{this.props.movie.vote_average}</span></span></p>
                  <p className={this.props.showLikeButton ? "show" : "hide"}>{this.props.liked ? this.unlike() : this.like()}</p>
                  <button className={this.props.showLikeButton ? "hide" : "show btn btn-primary"} onClick={this.removeLike.bind(this)}>Remove</button>
                </div>
              </div>
            </div>
      );

  }
}

export default connect(null, {addToLikes, removeFromLikes}) (MovieItem);
