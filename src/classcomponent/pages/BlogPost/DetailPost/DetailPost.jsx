import axios from 'axios';
import React, { Component } from 'react';

import './DetailPost.css'

class DetailPost extends Component {
  state = {
    post: {
      title: '',
      body: '',
    },
  };
  componentDidMount() {
    // console.log(this.props.match);
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3004/posts/${id}`).then(res => {
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <p>Detail Post</p>
          <div className="detail-pos">
            <p className="title">{this.state.post.title}</p>
            <p className="desc">{this.state.post.body}</p>
          </div>
        </div>
      </>
    );
  }
}

export default DetailPost;
