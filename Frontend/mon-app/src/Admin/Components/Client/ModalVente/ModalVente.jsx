import {React,useEffect,useState} from "react"
import Modal from 'react-modal';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from"axios"

const ModalVente = (props) => {

  useEffect(()=>{
    console.log(props.valuesInput_client._id)
  },[])

  const [valuesInput, setValues] = useState({});

    const MyValueInput =(event)=>{
        let res = valuesInput
        res[event.target.name] = event.target.value
        setValues(res)
      }

      const handleFormSubmit = async (event) => {
        event.preventDefault();


        console.log(props.valuesInput_client._id,valuesInput.klo,valuesInput.prix)

        const data = await axios.post(
          "http://localhost:4000/api/piements/post",
          {
            prix : valuesInput.prix,
            klo : valuesInput.klo,
            client: props.valuesInput_client._id

          }
        );
          
     
        toast("Action has been added with success ", {
          type: "success",
        });
   
      };
  
    
    

    return (
       <Modal
        isOpen={props.modalVenteIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalVenteIsOpen(false)}
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
          <h3 className="font-weight-light">Add new Vente</h3>
          <br />
          <form
           className="pt-3"
           onSubmit={handleFormSubmit}
           encType="multipart/form-data"

        >
                       <div className="form-group">
              <h5 className="auth-link text-black">Klo</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="klo"
                required
                placeholder="klo"
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black">Price</h5>
              <input
                type="number"
                className="form-control"
                id="exampleInputUsername2"
                name="prix"
                required
                placeholder="price"
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
                onClick={() => props.setModalVenteIsOpen(false)}
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

      </Modal> 
      );
      
}

 
export default ModalVente;