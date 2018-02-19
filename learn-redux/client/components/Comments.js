import React from 'react';

class Comments extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.author.value;
    const comment = this.comment.value;
    if(author && comment){
      this.props.addComment(postId, author, comment);
      this.commentForm.reset();
    }
  }

  render(){
    return (
      <div className="comments">
        {this.props.postComments.map((comment, index)=>{
          return (

            <div className="comment" key={index}>
              <p>
                <strong>{comment.user}</strong>
                 {comment.text}
                 <button className="remove-comment" onClick={()=>this.props.removeComment(this.props.params.postId, index)}>&times;</button>
              </p>
            </div>
          )
        })}

        <form ref={(input) => this.commentForm = input} className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={(input) => this.author = input} placeholder="author"/>
          <input type="text" ref={(input) => this.comment = input} placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;
