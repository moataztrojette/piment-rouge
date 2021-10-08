import React from "react";
import Modal from 'react-modal';
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";


const ModalUpdate = (props) => {

  const MyValueInputUpdate = (event)=>{
        let res = props.valuesInput_update
        props.setValues_update({...res,[event.target.name] : event.target.value}); 
  }

  const handleFormSubmit = async(event)=>{
      event.preventDefault()
      const data = await axios.put(
        "http://localhost:4000/api/clients/update/" + props.valuesInput_update._id,
        props.valuesInput_update
      );
      toast("Customer has been Successfully Modified ", {
        type: "success",
      });

      const filter = props.client.find(
        (element)=>element._id ===props.valuesInput_update._id
    )
    const newState = props.client;
    const index =props.client.indexOf(filter)
    newState[index] = data.data
    props.setClient(newState)

  }


    return (<div>
        <Modal
      isOpen={props.modalUpdateIsOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={() => props.setModalUpdateIsOpen(false)}
      style={{
        content: {
          top: "50%",
          left: "55%",
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
        <h3 className="font-weight-light">Modify customer informationt</h3>
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
              value = {props.valuesInput_update.nom}
              onChange={MyValueInputUpdate}
            
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
              value = {props.valuesInput_update.adresse}
              onChange={MyValueInputUpdate}
            
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
              value = {props.valuesInput_update.numero}
              onChange={MyValueInputUpdate}
            
            />
          </div>


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
              onClick={() => props.setModalUpdateIsOpen(false)}
              className="btn btn-block btn-facebook auth-form-btn"
            >
              <i className="mdi mr-2" />
              Retour{" "}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>

    </Modal>

  </div>   );
}
 
export default ModalUpdate;