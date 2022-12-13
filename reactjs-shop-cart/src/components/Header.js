import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div onClick={() => props.handleShow(false)}>
        <a href="/">Shopping Cart App</a>
      </div>
      <div
      // onClick={() => props.reportShow()}
      >
        <a href="/report">Report</a>
        {/* <Link to="/report">Report</Link> */}
      </div>
      <div onClick={() => props.handleShow(true)}>
        <a href="/">
          Cart <sup> {props.count} </sup>
        </a>
      </div>
    </div>
  );
}

export default Header;
