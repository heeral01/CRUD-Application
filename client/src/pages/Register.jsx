import React, { useState } from "react";
import "./Register.css";
function Register() {
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    age: "",
    address: "",
    description: "",
  });
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="form-data">
        <form action="">
          <div>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              value={inpval.email}
              onChange={setdata}
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="number"
              value={inpval.phone}
              onChange={setdata}
              name="phone"
              id="number"
              placeholder="Phone number"
            />
          </div>
          <div>
            <input
              type="text"
              value={inpval.work}
              onChange={setdata}
              name="work"
              id="work"
              placeholder="Work"
            />
          </div>
          <div>
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              id="age"
              placeholder="Age"
            />
          </div>
          <div>
            <input
              type="text"
              value={inpval.address}
              onChange={setdata}
              name="address"
              id="address"
              placeholder="Address"
            />
          </div>

          <div className="mes">
            <textarea
              name="description"
              value={inpval.description}
              onChange={setdata}
              cols="30"
              rows="6"
              placeholder="Description"
              className="contact-in-textarea"
              id="message"
            ></textarea>
          </div>
          <div>
            <button className="button-form" type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
