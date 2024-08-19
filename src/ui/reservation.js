import BookingForm from "./bookingform";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../util/api";

function Reservation({availableTimes, dispatch}){
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ocassion, setOcassion] = useState('Birthday');
    const [request, setRequest] = useState('');
    const [guest, setGuest] = useState(1);
    
    const navigate = useNavigate();
    function submitForm(e) {
        e.preventDefault();
        const formData = {
            'name':  name,
            'email': email,
            'date': availableTimes.selectedDate,
            'time': time,
            'ocassion': ocassion,
            'request': request,
            'guest': guest,
        }
        console.log("Submitting form");
        const result = submitAPI(formData);
        if (result){
            navigate('/confirmation', { state: { formData: formData } });
        }
    }

    return <>
            <Header/>
            <BookingForm submitForm={submitForm} availableTimes={availableTimes} updateTimes={dispatch} time={time} name={name} email={email} ocassion={ocassion} request={request} guest={guest}
            setTime={setTime} setName={setName} setEmail={setEmail} setOcassion={setOcassion} setRequest={setRequest} setGuest={setGuest}
            />
            <Footer/>
        </>
}
export default Reservation;