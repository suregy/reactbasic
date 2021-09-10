import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../../functioncomponent/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: '',
    },
    isUpdate: false,
  };

  //cara run db json
  //json-server --watch db.json --port 3004

  //refresh post
  getAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then(res => {
      // console.log(res.data);
      this.setState({
        post: res.data,
      });
    });
  };

  //untuk remove data
  handleRemove = data => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then(res => {
      // console.log(res);
      this.getAPI();
    });
  };

  //untuk edit form data
  handleUpdate = data => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  //untuk update submit data
  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then(res => {
        console.log(res);
        this.getAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: '',
          },
        });
      });
  };

  //untuk post data
  postDataToAPI() {
    axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then(
      res => {
        console.log(res);
        this.getAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: '',
          },
        });
      },
      err => {
        console.log('erro :', err);
      }
    );
  }

  //untuk handle form
  handleFormChange = event => {
    //console.log('form change', event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    //untuk membuat id
    if (!this.state.isUpdate) {
      formBlogPostNew['id'] = timeStamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        // console.log('value obj formBlogPost', this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    //console.log(this.state.formBlogPost);
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json =>
    //             this.setState({
    //                 post: json
    //             })
    //         )
    // axios.get('http://localhost:3004/posts')
    //     .then((res) => {
    //         // console.log(res.data);
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    this.getAPI();
  }

  //handle detail post
  handleDetail = id => {
    this.props.history.push(`detail-post/${id}`);
  };

  render() {
    return (
      <>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">title</label>
          <input
            type="text"
            value={this.state.formBlogPost.title}
            name="title"
            placeholder="add title post"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">body content</label>
          <textarea
            id="body"
            value={this.state.formBlogPost.body}
            name="body"
            placeholder="body content"
            cols="30"
            rows="10"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            simpan
          </button>
        </div>
        {this.state.post.map(post => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
      </>
    );
  }
}

export default BlogPost;
