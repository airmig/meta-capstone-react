import DishesDB from "../util/dishdb";

function Specials(){
    const firstDishes = DishesDB.slice(0, 4);
    return  <>
        <div className="row px-5 py-3 specials-container">
            <sub className="specials-subtitle">Savor Every Bite</sub>
            <h1 className="specials-title">SPECIALS</h1>
        </div>
        <div className="row px-5 specials-container">
            {
              firstDishes.map( dish => 
                <div key={dish.key} className="col pb-4 d-flex justify-content-center">
                    <div className="card card-size d-flex justify-content-center shadow-container">
                        <img className="card-img-top" src={dish.image} alt={dish.title}/>
                        <button className="btn btn-success reserve-button mt-4 mx-3">ORDER NOW</button>
                        <div className="card-body">
                            <h5 className="card-title">{dish.title}</h5>
                            <p className="card-text">{dish.description}. <span className="price">${dish.price}</span></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
}
export default Specials;