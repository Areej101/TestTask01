import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
    const [formvalue, setFormvalue] = useState({ email: ''});
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);

    const handlevalidation = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    }
    const validationform = (value)=>{
        const errors= {};
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!value.email){
            errors.email="Please Enter Email";
        } else if(!emailPattern.test(value.email))
        {
            errors.email="Enter Valid Email";
        }

        return errors;
    }

    useEffect( ()=>{

        if(Object.keys(formerror).length===0 && issubmit)
        {
         
            console.log(formvalue);

        }


    },[formerror, formvalue, issubmit]);


    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <form onSubmit={handlesubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label" >Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={formvalue.email} onChange={handlevalidation} />
                        <span className="text-danger">{ formerror.email}  </span>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your Feedback</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;