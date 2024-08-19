
import { Link } from "react-router-dom";
function Footer(){
    return <footer>
        <div className="container-fluid">
            <div className="row pt-3" style={{border: '1px dashed #c4c4c4'}}>
                <div className="col-2">&nbsp;</div>
                <div className="col-3 align-items-center ">
                    <p className="footer-header">Contact Info</p>
                    <p>littlelemon@example.com<br/>
                    (555) 444-44444
                    
                    <br/>123 Citrus Avenue<br/>
                    San José, Costa Rica 10101</p>
                </div>
                <div className="col-3 align-items-center ">
                    <p className="footer-header">Navigation </p>
                    <p>
                    <Link to="/">Home</Link><br/>
                    <Link to="/about">About</Link><br/>
                    <Link to="/menu">Menu</Link><br/>
                    <Link to="/reservations">Reservations</Link><br/>
                    <Link to="/order">Order Online</Link><br/>
                    <Link to="/login">Login</Link><br/>
                    </p>
                </div>
                <div className="col-2 align-items-center ">
                    <p className="footer-header">Social Media</p>
                    <p>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-snapchat-ghost"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-reddit"></i>
                    <i className="fab fa-tiktok"></i>
                    </p>
                </div>
                <div className="col footer-text d-flex  align-items-center justify-content-center ">
                    <img src="newlogo.png" height="100px" alt="little lemon"/>
                    LITTLE LEMON
                </div>
            </div>
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center pt-3">
                    <p>Capstone Project for Meta Frontend Professional Developer - 2024 by Ariel Duran.</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;