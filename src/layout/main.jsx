import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";



class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=6027685&s=Madagascar')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    }

    searchMovies = (str , type ="all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=6027685&s=${str}${
                type !== "all" ? `&type=${type}` : ""
                }`
            )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    };

    render() {
         // eslint-disable-next-line
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={this.state.movies}/>}
            </main>
        );
    }
}
export { Main };
