import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [{term: '', definition: '', tags: ''}],
      hideResults: true,
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {

  }

  handleSearch(e) {
    let query = e.target.value || '';
    let context = this;
    this.setState({ query: query});
    console.log('query: ',query);
    axios.get('/search/' + query)
      .then(function (response) {
        console.log('response: ', response.data);
        context.setState({
          results: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      if(query === ''){
        this.setState({hideResults: true});
      } else {
        this.setState({hideResults: false});
      }
  }

  render() {
    return (
      <div className='header'>
        <h1>Key-Value Dictionary</h1>
        <Search handleSearch={this.handleSearch} />
        {!this.state.hideResults && <Results results={this.state.results} />}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));