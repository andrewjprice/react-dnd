import React from 'react';
import Demo from '../src/components/Demo';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="app">
        <Demo />
      </div>
    )
  }
};