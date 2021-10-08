import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Singup = (props) => {
    const [valuesInput, setValues] = useState({});
    const MyValueInput = (event) => {
        let res = valuesInput;
        res[event.target.name] = event.target.value;
        setValues(res);
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post(
            "http://localhost:4000/api/users/post",
            valuesInput
          );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Compte créé",
            showConfirmButton: false,
            timer: 1500,
          });
          props.history.push("/login");

          //setErrors(Validation(valuesInput))
        } catch (error) {
           console.log(error) 
          toast(error.response.data, {
            type: "error",
          });
        }
        
      };


  return (
    <div>
      <div className="d-lg-flex half">
        <div className="image_singup" />
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="bloc_singup">
                <h3>
                  Singup to <strong>Piment Rouge</strong>
                </h3>
                <br />
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      onChange={MyValueInput}
                      className="form-control"
                      name="nomUser"
                      placeholder="username"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group first">
                    <label htmlFor="Email">Email</label>
                    <input
                                          onChange={MyValueInput}

                      type="email"
                      className="form-control"
                      name="adresseEmail"
                      placeholder="your-email@gmail.com"
                      id="Email"
                      required
                    />
                  </div>

                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={MyValueInput}
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      id="password"
                      required
                    />
                  </div>
                  <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
                  <input
                    type="submit"
                    value="Singup"
                    className="btn btn-block btn-primary"
                  />

                  <Link to ='/login'>Login ! </Link>
                  </div>
                
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
