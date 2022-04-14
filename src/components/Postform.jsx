import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions.jsx";
import Card from "./shared/Card.jsx";
import Button from "./shared/Button.jsx";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // Call action

    this.props.createPost(post);
  }
  render() {
    return (
      <>
        <Card>
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="">Title: </label>
            <div className="input-group">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <label htmlFor="">Body: </label>
            <div className="input-group">
              <input
                type="text"
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
            </div>
            <br />

            <Button type="submit">Send</Button>
          </form>
        </Card>
      </>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
