import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='header'>
        <h1>Key Value Dictionary</h1>
        <Search />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));