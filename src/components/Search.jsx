import React from 'react';
import { connect } from 'react-redux'
import { setCurrentVideo } from '../actions/actions.js'

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      value:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.props.getQueryString(this.state.value)
    event.preventDefault()
  }

  render() {
    // let input
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" 
        // onClick={
        //   dispatch(setCurrentVideo(input.value))
        // }
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

export default Search;