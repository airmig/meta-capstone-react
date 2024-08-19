
import { useEffect, useRef, useState } from "react";
function BookingForm({submitForm, availableTimes, updateTimes, time,name,email,ocassion,request,guest,
    setTime,setName,setEmail,setOcassion,setRequest,setGuest}){

    function dateChanged(value){
        let date =  new Date(value);
        let today = new Date();
        updateTimes({ type: 'SET_DATE', date: date });
        if (date > today){
            setFormErrors((formErrors)=>({...formErrors, date:false}));
        }
        else {
            setFormErrors((formErrors)=>({...formErrors, date:true}));
        }
    }
    const timeRef = useRef(null);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const [formErrors, setFormErrors] = useState({
        name: true,
        email: true,
        date: true,
        time: true
    });

    useEffect(()=>{
        setTime(timeRef.current.value);
    }, [setTime])

    function nameChanged(e){
        setName((name)=>e.target.value);
        if (e.target.value.length > 5){
            setFormErrors((formErrors)=>({...formErrors, name:false}));
        }
        else {
            setFormErrors((formErrors)=>({...formErrors, name:true}));
        }
    }

    function emailChanged(e){
        setEmail((email)=>e.target.value);
        if (e.target.validity.valid && e.target.value.length > 0){
            setFormErrors((formErrors)=>({...formErrors, email:false}));
        }
        else {
            setFormErrors((formErrors)=>({...formErrors, email:true}));
        }
    }

    function isButtonDisabled(){
        return formErrors.name || formErrors.email;
    }

    return <>
    <div className="container">
            <div className="row p-3">
                <div className="col d-flex flex-row align-items-center justify-content-center">
                <sub className="specials-subtitle" style={{zIndex:'-1'}}>Perfect dining choice!</sub>
                </div>
            </div>
            <div className="row p-0">
                <div className="col d-flex flex-row align-items-center justify-content-center">
                <h1 className="specials-title" style={{display: 'block'}}>TABLE RESERVATIONS</h1>
                </div>
            </div>
    </div>
        <form onSubmit={submitForm}>
        <div className="container">
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input ref={nameRef} type="text" className="form-control" id="name" onChange={(e)=> {nameChanged(e)}} placeholder="Enter your full name"/>
            </div>
            {formErrors.name && 
              <div role="alert-name" className="mb-3 errorForm">
                <i className="fa-solid fa-triangle-exclamation"></i> Name has to be greater than 5 characters.
              </div>
            }
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" ref={emailRef} className="form-control" id="email" onChange={(e)=>{emailChanged(e)}} placeholder="name@example.com"/>
            </div>
            {formErrors.email && 
              <div role="alert-email" className="mb-3 errorForm">
                <i className="fa-solid fa-triangle-exclamation"></i> Email is not valid.
              </div>
            }
            <div className="col-12">
            <label htmlFor="res-date" className="form-label">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => dateChanged(e.target.value)}/>
            </div>
            {formErrors.date && 
              <div role="alert-date" className="mb-3 errorForm">
                <i className="fa-solid fa-triangle-exclamation"></i> Date cannot be today or in the past.
              </div>
            }
            <div className="col-12">
            <label htmlFor="res-time">Choose time</label>
            <select ref={timeRef} id="res-time" onChange={(e) => setTime(e.target.value)}>
                {availableTimes.availableTimes.map( item =>
                    <option key={item} value={item}>{item}</option>
                )}
            </select>
            </div>
            <div className="col-12">
                <label htmlFor="occasion" className="col-1 col-form-label">Occasion</label>
                <select  id="occasion" onChange={(e) => setOcassion(e.target.value)} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                <div className="col-12">
                <label htmlFor="guests" className="col-2 col-form-label">Number of guests</label>
                <input  onChange={(e)=>{setGuest(e.target.value)}} type="number" placeholder="1" min="1" max="10" id="guests"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Special Requests</label>
                <textarea onChange={(e)=>{setRequest(e.target.value)}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="col d-flex justify-content-center mb-3">
            <button aria-label="On Click" role="button" id="submitReservation" disabled={isButtonDisabled()} type="submit" className="btn btn-success reserve-button mt-4 mx-3">RESERVE</button>
            </div>
    </div></form></>
}

export default BookingForm;