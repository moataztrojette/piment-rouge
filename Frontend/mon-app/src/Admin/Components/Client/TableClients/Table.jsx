import React, { useEffect, useState } from "react"
import ModalAdd from "../ModalAdd/ModalAdd";
import ModalUpdate from "../ModalUpdate/ModalUpdate"
import ModalVente from "../ModalVente/ModalVente"
import { Link } from 'react-router-dom';

import axios from"axios"
import Swal from "sweetalert2";

const Table = (props) => {


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalVenteIsOpen, setModalVenteIsOpen] = useState(false);
  const [valuesInput_client, setValues_client] = useState({});

  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
  const [valuesInput_update, setValues_update] = useState({});



  const deleteClient = (id) => {
    axios.delete("http://localhost:4000/api/clients/delete/" + id);
    Swal.fire("Client", "Client a été supprimé", "success");
    const preventState = props.client;
    const newState = preventState.filter((cat) => cat._id != id);
    props.setClient(newState);
  };
  const sercheClient = async (event) => {
    if (event.target.value == "") {
      axios.get("http://localhost:4000/api/clients/findall").then((cat) => {
        props.setClient(cat.data);
      });
    } else {
      const data = await axios.get(
        "http://localhost:4000/api/clients/serche/" + event.target.value
      );
      props.setClient(data.data);
    }
  };

    return (<div className="col-lg-8 d-flex flex-column">
    {modalIsOpen == true ? <div><ModalAdd  client={props.client} setClient={props.setClient}   modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}  /></div> : <div></div>}
    {modalUpdateIsOpen == true ? <div><ModalUpdate  modalUpdateIsOpen={modalUpdateIsOpen} setModalUpdateIsOpen={setModalUpdateIsOpen} client={props.client} setClient={props.setClient} valuesInput_update={valuesInput_update} setValues_update={setValues_update}  /></div> : <div></div>}
    {modalVenteIsOpen == true ? <div><ModalVente  modalVenteIsOpen={modalVenteIsOpen} setModalVenteIsOpen={setModalVenteIsOpen}  valuesInput_client={valuesInput_client} setValues_client={setValues_client}  /></div> : <div></div>}
         
    <div className="row flex-grow">
      <div className="col-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="d-sm-flex justify-content-between align-items-start">
              <div>
                <h4 className="card-title card-title-dash">Client list</h4>
              </div>
              <div>
                <div className="Add_membre">
                <div>
            <form>
              <input
                type="search"
                name="serche"
                className="serche_class"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={sercheClient}
              />
            </form>

          </div>

                <button className="btn btn-primary btn-lg text-white mb-0 me-0" type="button"  onClick={() => {
                      setModalIsOpen(true);
                }}><i className="mdi mdi-account-plus" />Add new member</button>
      
          </div>

              </div>
            </div>
            <div className="table-responsive  mt-1">
              <table className="table select-table">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check form-check-flat mt-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                      </div>
                    </th>
                    <th>Customer</th>
                    <th>Location</th>
                    <th>Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.client.map((cl) => (
                    <tr>
                    <td>
                      <div className="form-check form-check-flat mt-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-center">
                        <img src="https://www.targetfirst.com/wp-content/uploads/2016/02/article-client-heureux1.jpg" alt="" />
                        <td>
                          <h6 style={{fontSize:"14px"}}>{cl.nom}</h6>
                        </td>
                      </div>
                    </td>
                    <td>
                      <h6 style={{fontSize:"14px"}}>{cl.adresse}</h6>
                    </td>
                    <td>
                    <h6 style={{fontSize:"14px"}}>{cl.numero}</h6>

                    </td>
                    <td>
                      <div className="d-flex justify-content-around">
                      <div className="mdi mdi-lead-pencil" style={{fontSize:"19px"}} onClick={() => {
                      setModalUpdateIsOpen(true);
                      setValues_update(cl);
                    }}
                    ></div>
                      <div className="mdi mdi-plus-box" style={{fontSize:"19px"}} onClick={() => {
                      setModalVenteIsOpen(true);
                      setValues_client(cl);
                    }}></div>
                      <div className="mdi mdi-delete" style={{fontSize:"19px"}}   onClick={() =>
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteClient(cl._id);
                            }
                          })
                        }
                        ></div>
                     <Link to={"/liste/"+cl._id}><div className="mdi mdi-eye" style={{fontSize:"19px"}}></div></Link>
                      </div>
                    </td>
                  </tr>
   
                
                  ))}
                  
              
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
      );
}
 
export default Table;