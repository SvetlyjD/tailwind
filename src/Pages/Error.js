import React from 'react';
import { Route, Routes } from 'react-router';

export default class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: []
    }
  }

  render() {
         return (
        <div>
         Error
        </div>
      )
  }
}