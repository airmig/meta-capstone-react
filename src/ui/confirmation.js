import Footer from "./footer";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Confirmation(){
    const  location = useLocation();
    const formDataState = location.state || {};
    const formData = formDataState.formData;
    let isMounted = true;
    useEffect(()=>{
        if (isMounted){
            let localStorageBookingData = localStorage.getItem('bookingData');
            let localBookingData = localStorageBookingData ? JSON.parse(localStorageBookingData) : [];
            localBookingData.push(formData);
            localStorage.setItem('bookingData',JSON.stringify(localBookingData));
        }
        return () => {
            isMounted = false;
        };
    },[formData, isMounted]);

    let confirmationDate =  new Date(formData.date);
    confirmationDate.setDate(confirmationDate.getDate() + 1);
    confirmationDate.setMonth(confirmationDate.getMonth() + 1);
    return <>
        <Header/>
        <div className="container">
            <div className="row p-3">
                <div className="col d-flex flex-row align-items-center justify-content-center">
                <sub className="specials-subtitle" style={{zIndex:'-1'}}>Perfect dining choice!</sub>
                </div>
            </div>
            <div className="row p-0">
                <div className="col d-flex flex-row align-items-center justify-content-center">
                <h1 className="specials-title" style={{display: 'block'}}>Confirmation Details Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <table>
                    <tbody>
                            <tr>
                                <td className="columnDescription">Name</td>
                                <td>{formData.name}</td>
                            </tr>
                            <tr>
                                <td className="columnDescription">Email</td>
                                <td>{formData.email}</td>
                            </tr>
                            <tr>
                                <td className="columnDescription">Date</td>
                                <td>{confirmationDate.getDate()}/{confirmationDate.getMonth()}/{confirmationDate.getFullYear()}</td>
                            </tr>
                            <tr>
                                <td className="columnDescription">Time</td>
                                <td>{formData.time}</td>
                            </tr>
                            <tr>
                                <td className="columnDescription">Ocassion</td>
                                <td>{formData.ocassion}</td>
                            </tr>
                            <tr>
                                <td className="columnDescription">Total Guests</td>
                                <td>{formData.guest}</td>
                            </tr>
                            <tr>
                                <td className="columnDescription">Special Requests</td>
                                <td>{formData.request}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
        <Footer/>
    </>
}

export default Confirmation;