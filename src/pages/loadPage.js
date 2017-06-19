import React from 'react';
import { connect } from 'react-redux';
import { fetchLoadData } from '../actions/postAction';

@connect((store) => {
  return {
    load: store.load,
  };
})
export default class Load extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchLoadData());
  }
  render() {
    const post = this.props.load.posts;
    if (post !== '') {
      var divStyle = {
        display:post.data.display
      };
    }
    return (
      <div className="shade" style = {divStyle}>
          <div className="cons">
              <div className="load">
                  <div className="ball1"></div>
                  <div className="ball2"></div>
                  <div className="ball3"></div>
              </div>
              <p>加载中....</p>
          </div>
      </div>
      )
  }
}
