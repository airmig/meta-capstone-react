import Footer from "./footer";
import Header from "./header";
import DishesDB from "../util/dishdb";
function Menu(){
    return <>
            <Header/>
            <div className="container">
            <div className="row p-3 m-3">
                    <div className="col d-flex flex-row align-items-center justify-content-center">
                    <sub className="specials-subtitle" style={{zIndex:'-1'}}>Dining Selections</sub>
                    </div>
                </div>
                <div className="row p-0">
                    <div className="col d-flex flex-row align-items-center justify-content-center">
                    <h1 className="specials-title" style={{display: 'block'}}>OUR MENU</h1>
                    </div>
                </div>
            </div>
            <div className="container menu-container">
                {
                    DishesDB.map(item =>
                     <div key={item.key} className="row" style={{borderBottom: '1px dashed #c4c4c4'}}>
                        <div className="col">
                            <img className="menu-image" src={item.image} alt={item.name}/>
                        </div>
                        <div className="col-3">
                            <h3>{item.title}</h3>
                            <span className="">{item.description}</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span className="price">${item.price}</span>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                        <button className="btn btn-success reserve-button m-3">ORDER NOW</button>
                            </div>
                    </div>)
                }
            </div>
            <Footer/>
        </>
}
export default Menu;