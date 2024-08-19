import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router-dom";
function About(){
    return <>
            <Header/>
            <div className="jumbotron p-5" style={{fontSize: '1.3rem'}}>
                <h1 className="display-4" >About Us!</h1>
                <img height="300px" width="100%" style={{objectFit:'cover'}} src="restaurant.jpeg" />
                 <hr className="my-4"/>
                <p>Welcome to Little Lemon Restaurant!

At Little Lemon, we believe that great food starts with the finest ingredients and a passion for culinary excellence. Nestled in the heart of Citrus Avenue, our restaurant has been a beloved destination for both locals and visitors since 2024.
</p><p>
Our menu is a vibrant celebration of flavors, featuring a blend of traditional and contemporary dishes crafted from locally sourced, fresh ingredients. Whether you’re in the mood for a hearty entrée, a light salad, or a delectable dessert, our diverse offerings cater to all tastes and dietary preferences.
</p><p>
Our talented chefs are dedicated to bringing you an exceptional dining experience with every visit. They combine skill and creativity to transform seasonal ingredients into mouthwatering dishes that reflect our commitment to quality and innovation.
</p>
                <p className="lead">
                <Link to="/reservations"  className="btn btn-success reserve-button">RESERVE A TABLE</Link>
   
                </p>
            </div>
            <Footer/>
        </>
}
export default About;