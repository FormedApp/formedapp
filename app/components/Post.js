import React, {Component} from 'react';

class Post extends Component {
  render() {
    return (
  		<div className="feed response">
			<img src="images/images.jpg" className="user-img" alt="" />
			<p className="user-name">Kristin <br />
			<span className="time-since-posted">5 mins ago</span></p>
			<p className="activity-label"><a className="activity-name">The Jesus Who Sees</a></p>
			<p className="response-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tenetur, laborum ratione voluptatibus dolore, aliquam vitae repellendus eveniet odit deserunt debitis qui quo rerum totam hic, mollitia id tempore sit!</p>
			<a href="#" className="options" data-toggle="modal" data-target="#optionsModal"><i className="fa fa-ellipsis-v"></i></a>
		</div>
    );
  }
}

export default Post;