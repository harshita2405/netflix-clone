import "./App.css";
import Row from "./components/Row";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./utils/requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow={true}
        url={requests.netflixOriginals}
      />
      <Row title="Trending Now" url={requests.trendingNow} />
      <Row title="Top Rated" url={requests.topRated} />
      <Row title="Action Movies" url={requests.actionMovies} />
      <Row title="Comedy Movies" url={requests.comedyMovies} />
      <Row title="Romance Movies" url={requests.romanceMovies} />
      <Row title="Documentary Movies" url={requests.documentaries} />
    </div>
  );
}

export default App;
