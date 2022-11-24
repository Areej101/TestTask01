import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    let navigation = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const { name, username, email, phone } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        navigation.push("/");
    };
    
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group" class="mb-3">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Enter Your Name" name="name" value={name} 
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group" class="mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group" class="mb-3">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group" class="mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="d-grid gap-2">
                        <button className="btn btn-success btn-block">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;