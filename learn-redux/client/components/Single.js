import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {

  render(){
    //index of post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    //get us the post
    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.postId] || []
    console.log(postComments);

    return (
      <div className="single-photo">
       <Photo i={i} post={post} {...this.props} />
       <Comments i={i} postComments={postComments} {...this.props}/>
      </div>
    )
  }
}

export default Single;
