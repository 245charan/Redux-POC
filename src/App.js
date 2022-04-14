import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import store from "./store.jsx";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
