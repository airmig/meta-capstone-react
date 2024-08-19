
import { Link } from "react-router-dom";

function Navigation(){
    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span className="header-title">
      <img src="newlogo.png" height="45px" alt="Little Lemon Logo" />
      LITTLE LEMON
      </span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-center navbarMenuItems">
          <li className="nav-item">
            <Link  className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
         
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
          
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/reservations">Reservations</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/order">Order Online</Link>
          
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/bookingdata">BookingData</Link>
          </li>
          <li className="">
           <img src="shopping.png" height="30px" alt="Shopping cart"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navigation;