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
        style={{ width: "100px", height: "100px" }}
        src="https://effoysira.com/wp-content/uploads/2023/01/FB_IMG_16737714405240162.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        {/* <h1 className="siTitle">Dubie</h1> */}

        <span className="siTitle">Addis Ababa - Dubie </span>
        <span style={{ fontWeight: "bold" }} className="siFeatures">
          18:45 - 20:30 (1h 50m )
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
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
