import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <h3>About Us</h3>
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <h3>Contact Us</h3>
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest Houses</li>
        </ul>
        <ul className="fList">
          <h3>Services</h3>
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <h3>Other Services</h3>
          <li className="fListItem">Car Rental </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText" style={{ textAlign: "center", padding: "20px" }}>
        Copyright © 2023 Zagol Bookings.
      </div>
    </div>
  );
};

export default Footer;
