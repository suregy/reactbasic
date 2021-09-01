//library
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//pages
import YoutubeComp from '../../functioncomponent/YoutubeComp/YoutubeComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import YoutubeCompPage from '../pages/YotubeComp/YoutubeComp';

//styles
import './YotubeHome.css';

class YoutubeHome extends React.Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //     this.setState({
    //         showComponent: false
    //     })
    // }, 15000)
  }

  render() {
    return (
      <BrowserRouter>
        {/*<div>
                     <p>Youtube Component</p>
                    <hr />
                    <YoutubeComp time="6:30" title="Belajar React Bag 1" desc="Akan belajar instalasi" />
                    <YoutubeComp time="7:10" title="Belajar React Bag 2" desc="Akan belajar inisiasi"/>
                    <YoutubeComp time="05:00" title="Belajar React Bag 3" desc="Akan belajar eksekusi"/>
                    <YoutubeComp />
                    <p>Counter</p>
                    <hr />
                    <Product />
                    <br />
                    <br />
                    <hr /> 
                     {
                        this.state.showComponent 
                        ? 
                        <LifeCycleComp /> 
                        : null
                    } 

                    <p>Blog Post</p>
                    <hr />
                    <BlogPost />
                    
                    <br />
                    <br />
                    <br />
                    <br />
                </div>*/}
        <>
          <div className="nav">
            <Link to="/">BlogPost</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">Lifecycle</Link>
            <Link to="/youtubepage">YoubePage</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtubepage" component={YoutubeCompPage} />
        </>
      </BrowserRouter>
    );
  }
}

export default YoutubeHome;
