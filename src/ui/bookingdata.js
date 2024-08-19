import Footer from "./footer";
import Header from "./header";

function BookingData(){
    let localStorageBookingData = localStorage.getItem('bookingData');
    let localBookingData = JSON.parse(localStorageBookingData);

    function getRealDate(date){
        let confirmationDate =  new Date(date);
        confirmationDate.setDate(confirmationDate.getDate() + 1);
        confirmationDate.setMonth(confirmationDate.getMonth() + 1);
        return confirmationDate.getDate();
    }
    function getRealMonth(date){
        let confirmationDate =  new Date(date);
        confirmationDate.setDate(confirmationDate.getDate() + 1);
        confirmationDate.setMonth(confirmationDate.getMonth() + 1);
        return confirmationDate.getMonth();
    }
    return <>
        <Header/>
        <main className="container">
             <div className="row pt-3 mt-2">
                <div className="col d-flex flex-row align-items-center justify-content-center">
                <h1 className="specials-title" style={{display: 'block'}}>BOOKING DATA</h1>
                </div>
            </div>
            <div className="row m-3 p-3">
                <div className="col d-flex justify-content-center">
                    { !localBookingData && <span className='hero-subtitle' >No bookings have been completed.</span> }
                    { localBookingData && <table className="bookingData">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Ocassion</td>
                                <td>Total Guests</td>
                                <td>Special Requests</td>
                            </tr>
                        </thead>
                        <tbody>
                        {localBookingData.map((item, index)=> 
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{getRealDate(item.date)}/{getRealMonth(item.date)}/{new Date(item.date).getFullYear()}</td>
                                <td>{item.time}</td>
                                <td>{item.ocassion}</td>
                                <td>{item.guest}</td>
                                <td>{item.request}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>}
                </div>
            </div>
        </main>
        <Footer/>
    </>
}

export default BookingData;