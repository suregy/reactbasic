import React, { PureComponent } from 'react';

const Post = props => {
  return (
    <div className="post">
      <div className="img-post">
        <img src="http://placeimg.com/200/150/tech" alt="tes" />
      </div>
      <div className="content">
        <p className="title-post" onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </p>
        <p className="desc-post">{props.data.body}</p>
        <button className="update" onClick={() => props.update(props.data)}>
          Update
        </button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
