import {React,useState} from "react"
import Modal from 'react-modal';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from"axios"

const ModalAdd = (props) => {
    const [valuesInput, setValues] = useState({});

    const MyValueInput =(event)=>{
        let res = valuesInput
        res[event.target.name] = event.target.value
        setValues(res)
      }

    const handleFormSubmit = async (event)=>{
  
        event.preventDefault()
        const data = await axios.post("http://localhost:4000/api/clients/post",valuesInput);
        toast("Customer was successfully added",{
          type:"success"
        });
        const newState = props.client
        newState.push(data.data)
        props.setClient(newState)}
    
    

    return (  <Modal
        isOpen={props.modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay : {
            backgroundColor:"rgba(206, 239, 248,0.8)",
          }
        }}
      >
        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">Add new Customer</h3>
          <br />
          <form className="pt-3" onSubmit={handleFormSubmit} >
            <div className="form-group">
              <h5 className="auth-link text-black">Name</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="nom"
                required
                placeholder="Name"
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black">Location</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="adresse"
                required
                placeholder="Location"
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black">Number</h5>
              <input
                type="number"
                className="form-control"
                id="exampleInputUsername2"
                name="numero"
                required
                placeholder="Number"
                onChange={MyValueInput}
              />
            </div>


<div className="d-flex justify-content-around">
            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Terminer{" "}
              </button>
            </div>

            <div className="mb-2">
              <button
                type="button"
                onClick={() => props.setModalIsOpen(false)}
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Retour{" "}
              </button>
            </div>
            </div>
          </form>
        </div>
        <ToastContainer></ToastContainer>

      </Modal>  );
}
 
export default ModalAdd;