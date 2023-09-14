import { useNavigate } from "react-router-dom";
import "./searchResult.css";

const SearchResult = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    // navigate("/hotels", { state: { hotel } });
    navigate("/details");
  };
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hilton Hotel</h1>
        <span className="siDistance">5km from bole</span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>4.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$120</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
