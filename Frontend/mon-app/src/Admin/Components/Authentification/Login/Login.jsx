import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Login = (props) => {
    const [valueInput, setInput] = useState({});
    const [error, setErrors] = useState(false);
    const backImage = ["/images/product/le-piment-rouge-reduit-risque-infarctus-avc.jpg"]

    const MyValueInput = (event) => {
      let res = valueInput;
      res[event.target.name] = event.target.value;
      setInput(res)
    };



    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
         await axios.post(
          "http://localhost:4000/api/users/login",
          valueInput
        );
        setErrors(false);
      
  
        props.history.replace("/");
   
      } catch (error) {
        //console.log(error.response)
        toast(error.response.data, {
          type: "error",
        });
      }
    };

    
    return (<div>
        <div className="d-lg-flex half">
       <div class="bg order-1 order-md-2"  style={{
                backgroundImage :`url(${backImage[Math.floor(Math.random() * backImage.length)] 
                })`,
                backgroundRepeat:'no-repeat',
                backgroundSize: "cover"

               
                }} />
       <div className="contents order-2 order-md-1">
         <div className="container">
           <div className="row align-items-center justify-content-center">
             <div className="bloc_singup">
               <h3>Login to <strong>Piment Rouge</strong></h3>
               <br />
               <form onSubmit={handleFormSubmit}>
                 <div className="form-group first">
                   <label htmlFor="username">Adresse Email</label>
                   <input type="email" required name="adresseEmail"   onChange={MyValueInput} className="form-control" placeholder="your-email@gmail.com" id="username" />
                 </div>
                 <div className="form-group last mb-3">
                   <label htmlFor="password">Password</label>
                   <input type="password" required name="password"   onChange={MyValueInput} className="form-control" placeholder="Your Password" id="password" />
                 </div>
                        <ToastContainer></ToastContainer>
                  <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
                 <input type="submit" value="Login" className="btn btn-block btn-primary" />
                 <Link to ='/singup'>Create your Account ! </Link>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>  );
}
 
export default Login;