import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions.jsx";
import Card from "./shared/Card.jsx";
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  /*constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    // console.log(123);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }*/
  render() {
    const postItems = this.props.posts.map((post) => (
      <Card>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </Card>
    ));
    return (
      <>
        <h1>POST</h1>
        <div className="text-display">{postItems}</div>

        {/* {postItems} */}
      </>
    );
  }
}

Posts.propType = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
