import React, { Component } from 'react';

class BlogReading extends Component {
  constructor(props){
    super(props);

  }

  post = (event) => {
console.log(event.target.value);
  }
render(){
  return(
<div>
    <div>
        <button onClick={this.post} value='post1'>cool</button>
        <article className="post1" hidden={true}>;lkfajfa;jd</article>
    </div>

      <div>
        <button onClick={this.post} value='post2'>cool</button>
        <article className="post2" hidden={true}>;lkfajfa;jd</article>
      </div>
      <div>
          <button onClick={this.post} value='post3'>cool</button>
          <article className="post3" hidden={true}>;lkfajfa;jd</article>
      </div>
      
    </div>
  );
}
}






















export default BlogReading;
