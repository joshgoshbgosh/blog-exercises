import React, { Component } from 'react';

class BlogReading extends Component {
  constructor(props){
    super(props);

  }

  post = (event) => {
console.log(event.target.value);
  }
render: function() {
  let boundClick = this.clickHandler.bind(thid, 'hello');
  return(
    <ul>
    {() => {
      items.map((item) => {
        return <li key={item.id}>{item.title}</li>
      });
    }()};
    </ul>

  );
},

onItemClick: function() {

}






















export default BlogReading;
