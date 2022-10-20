import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NpList from "./components/NpList";

function App() {
  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  return (
    <div className="App">
      <NpList />
    </div>
  );
}

export default App;
