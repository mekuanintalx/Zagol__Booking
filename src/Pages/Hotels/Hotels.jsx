import "./hotels.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import SearchResult from "../../components/SearchResult/SearchResult";

const Hotels = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
