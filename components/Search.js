import React, {Component} from 'react';
import {API_KEY} from '../secrets';
import {movies} from '../actions'
import {connect} from 'react-redux';

class Search extends Component {

  constructor(props){
    super(props);

    this.state = {
      query: ''
    };
    this.setQuery = this.setQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);

  }

  setQuery(event) {
     event.preventDefault();
     let query = event.target.value;
     this.setState({
      query
    });
  }

  submitQuery(event) {

    event.preventDefault();

    let query = this.state.query;
    //console.log("query: " + query);
    let input = query.trim().search(/^[-'\w]+[\s\w-']+$/);

    if (input === 0) {
      let url = `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
      //console.log(url);

      fetch(url, {
        method: 'GET'
      }).then(response => response.json())
      .then(jsonObj => {this.props.movies(jsonObj.results)});
    }

  }

  render(){
    return(
        <div className="search-section">
          <form onSubmit={this.submitQuery.bind(this)}>
            <div className="form-group search-input">
              <label className="search-label">Search Movies: </label>
              { ' ' }
              <input
                className="form-control search-control"
                type="text"
                placeholder="Title"
                onChange={this.setQuery.bind(this)}
               />
               { ' ' }
               <input type="submit" className="search-button"
                value="Submit"
               />
            </div>
          </form>
        </div>
    );
  }
}

export default connect(null, {movies})(Search);
