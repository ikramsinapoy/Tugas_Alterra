import React, { Component } from "react";
import axios from "axios";
import newsstyle from "./style/news.module.css";

const api = axios.create({
  baseURL: `https://614203cd4d16670017ba2b41.mockapi.io//user`,
});

class News extends Component {
  state = {
    courses: [],
  };
  constructor() {
    super();
    this.getCourses();
  }

  getCourses = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      this.setState({ courses: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className={newsstyle.containernews}>
        {this.state.courses.map((course) => (
          <div key={course.id} className={newsstyle.card}>
            <div className={newsstyle.text}>{course.name}</div>
            <div>{course.address}</div>
            <div>{course.phonenumber}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
