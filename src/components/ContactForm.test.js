import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";



describe('tests form', ()=>{
test('renders form', ()=>{
    render(<ContactForm/>)
    });
test('user can submit form with data', ()=>{
    //arrange
    render(<ContactForm/>)
    //act
    const nameInput = screen.getByLabelText(/First Name*/i);
    const lastInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole('button', {name:/submit/i});

    fireEvent.change(nameInput, {target:{name:'firstName', data:'Tyler'}})

    fireEvent.change(lastInput, {target:{name:'lastName', data:'Maynard'}})

    fireEvent.change(emailInput, {target:{name:'email', data:'tmayn1234@gmail.com'}})

    fireEvent.change(messageInput, {target:{name:'message', data:'i dont care'}})

    fireEvent.click(button)
    //assert
    const newname = screen.findByText(/tyler/i);
    
    const newlastname = screen.findByText(/maynard/i);

    const newemail = screen.findByText(/tmayn1234@gmail.com/i);

    const newmessage = screen.findByText(/i dont care/i);

    expect(newname).toBeTruthy();
    expect(newlastname).toBeTruthy();
    expect(newemail).toBeTruthy();
    expect(newmessage).toBeTruthy();
});
});