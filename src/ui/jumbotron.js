import { Link } from "react-router-dom";

function Jumbotron(){
    return      <div className="container col-xxl-8 px-4">
    <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5">
      <div className="col-10 col-sm-8 col-lg-6 d-flex justify-content-center py-4">
        <img src="restaurant-b.webp" className="d-block mx-lg-auto img-fluid" alt="Little Lemon Restaurant" width="700" height="500" loading="lazy"/>
      </div>
        <div className="col-lg-6">
        <h3 className="hero-subtitle">Costa Rica</h3>
        <h1 className="hero-title">Little Lemon</h1>
            <p className="lead mb-4 hero-description"> Discover the perfect combination of comfort and culinary excellence at Little Lemon, where every meal is a delightful journey.
            </p>
            <div className="d-grid pb-4 gap-2 d-md-flex justify-content-md-start">
              <Link to="/reservations"  className="btn btn-success reserve-button">RESERVE A TABLE</Link>
            </div>
        </div>
    </div>
    </div>;
}

export default Jumbotron;