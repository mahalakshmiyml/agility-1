import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordconfirm, setPasswordconfirm] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        axios.post('register', {
            firstname: firstname,
            lastname: lastname,
            email,
            password,
            password_confirm: passwordconfirm
        })
        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

  return (
    <div>
      <main className="form-signin py-3 py-md-5">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal text-center text-bold text-primary">Register Form</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="First Name"
              onChange={e => setFirstname(e.target.value)}
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="lastname"
              onChange={e => setLastname(e.target.value)}
            />
            <label for="floatingInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password confirm"
              onChange={e => setPasswordconfirm(e.target.value)}
            />
            <label for="floatingPassword">Password confirm</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
