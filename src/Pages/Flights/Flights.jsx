import "./Flights.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import FlightResult from "../../components/FlightResult/FlightResult";

const Flights = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <FlightResult />
            <FlightResult />
            <FlightResult />
            <FlightResult />
            <FlightResult />
            <FlightResult />
            <FlightResult />
            <FlightResult />
            <FlightResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
