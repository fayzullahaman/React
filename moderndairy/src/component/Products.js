export default function Products() {
  // Search Method start
  // const [searchItems, setSearchItems] = useState("");
  // const onSearch = (event) => {
  //   setSearchItems(event.target.value);
  // console.log(searchItems);
  //};

  // let filteredProducts = isproduct;
  // if (searchItems !== "") {
  //   filteredProducts = isproduct.filter((product) =>
  //     product.name.toLowerCase().includes(searchItems.toLocaleLowerCase())
  //   );
  //} // Search method ends

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp tesTimonial"
            data-wow-delay="0.1s"
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Our Products
            </p>
            <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeInUp testLeft"
              data-wow-delay="0.1s"
            >
              <div className="card pro_card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card pro_card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card pro_card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card pro_card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
