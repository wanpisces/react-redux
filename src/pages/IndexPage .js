import React from 'react';
import { connect } from 'react-redux';
import Load from '../pages/loadPage';
import Content from '../pages/contentPage'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Load/>
        <Content/>
      </div>
    )
  }

}

