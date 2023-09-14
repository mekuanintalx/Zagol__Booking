import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Properties from "../Properties/Properties";
import Footer from "../../components/Footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle" style={{ fontWeight: "bold" }}>
          Featured Properties
        </h1>
        <Properties />
        <h1 className="homeTitle" style={{ fontWeight: "bold" }}>
          Popular Attractions
        </h1>
        <Properties />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
