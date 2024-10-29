import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesList from "./component/MoviesList";
import MovieDetails from "./component/MovieDetails";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=1d4ec2088c7fff5cda9ac577119a1f7c&language=ar"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  //get a
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1d4ec2088c7fff5cda9ac577119a1f7c&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  // git movie by search
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=1d4ec2088c7fff5cda9ac577119a1f7c&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="font color-body">
      <Container>
        <BrowserRouter>
          <NavBar search={search} />
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
