import { render, screen, renderHook, fireEvent } from '@testing-library/react';
import Reservation from './ui/reservation';
import {  act, useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAvailableTimes } from "./util/timesreducer";

test ('renders the booking form header', () =>{
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  const headingElement = screen.getByText('TABLE RESERVATIONS');
  expect(headingElement).toBeInTheDocument();
});

test ('test initialize times', () =>{
  const { result } = renderHook(useAvailableTimes);
  const expectedTimes = ['17:00', '17:30', '18:30', '19:30', '20:30', '21:00', '22:00', '23:00'];
  expect(result.current[0].availableTimes).toEqual(expectedTimes);
});

test ('test update times', () =>{
  const { result } = renderHook(useAvailableTimes);
  const updateTimes =  result.current[1];
  const testDate = '1977-08-09';
  const expectedTimes = ['17:00', '17:30', '18:00', '18:30','19:00', '19:30',  '20:30', '21:30', '22:00', '22:30', '23:00'];
 act(() => {
    updateTimes({type:'SET_DATE', date: testDate});
  });
  expect(result.current[0].selectedDate).toEqual(new Date(testDate));
  expect(result.current[0].availableTimes).toEqual(expectedTimes);
});

test ('form submit', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  const nameInput = screen.getByLabelText(/Name/);
  fireEvent.change(nameInput, { target: {value: "Test Name"}});
  const emailInput = screen.getByLabelText(/Email address/);
  fireEvent.change(emailInput, { target: {value: "test@test.com"}});
  const submitButton =  screen.getByText(/RESERVE/);
  fireEvent.click(submitButton);
  expect(console.log).toHaveBeenCalledWith(('Form submitted with:', 'Submitting form'));
});


test ('local storage write', () =>{
  const key = 'bookingData';
  const formData = {
      'name':  'test name',
      'email': 'test@test.com',
      'date': '08-08-1977',
      'time': '13:00',
      'ocassion': 'Birthday',
      'request': 'special request',
      'guest': 2,
  };
  const storedJSON = JSON.stringify(formData);
  jest.spyOn(Storage.prototype, 'setItem');
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
  localStorage.setItem(key, storedJSON);
  expect(localStorage.setItem).toHaveBeenCalled();
  const storedValue = localStorage.getItem(key);
  expect(localStorage.getItem).toHaveBeenCalledWith(key);

});


test ('form submit invalid name', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  expect(screen.getByRole('alert-name')).toHaveTextContent('Name has to be greater than 5 characters.');
});

test ('form submit valid name', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  const nameInput = screen.getByLabelText(/Name/);
  fireEvent.change(nameInput, { target: {value: "test name"}});
  let foundElement = null;
  try {
     foundElement = screen.getByRole('alert-name');
  }
  catch(TestingLibraryElementError){}
  expect(foundElement).toBeNull();
});

test ('form submit invalid email', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  expect(screen.getByRole('alert-email')).toHaveTextContent('Email is not valid.');
});

test ('form submit valid email', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  const emailInput = screen.getByLabelText(/Email address/);
  fireEvent.change(emailInput, { target: {value: "test@test.com"}});
  let foundElement = null;
  try {
     foundElement = screen.getByRole('alert-email');
  }
  catch(TestingLibraryElementError){}
  expect(foundElement).toBeNull();
});


test ('form submit invalid date', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  expect(screen.getByRole('alert-date')).toHaveTextContent('Date cannot be today or in the past.');
});

test ('form submit valid date', () =>{
  console.log = jest.fn();
  const { result } = renderHook(useAvailableTimes);
  render(<BrowserRouter><Reservation availableTimes={result.current[0]} dispatch={result.current[1]}/></BrowserRouter>);
  
  // Select the dropdown element
  const selectElement = screen.getByLabelText(/Choose date/);

  // Change the select value
  fireEvent.change(selectElement, { target: { value: '3000-01-01' } });

  let foundElement = null;
  try {
     foundElement = screen.getByRole('alert-date');
  }
  catch(TestingLibraryElementError){}
  expect(foundElement).toBeNull();

});
