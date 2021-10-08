import React, { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const ListeVente = (props) => {
    const [vente,setVente] = useState([])
    const [chiffreAFF,setCA]= useState([])    
    useEffect(()=>{

            if(props.match.params.id){
                axios.get("http://localhost:4000/api/piements/find/"+props.match.params.id).then((res)=>{
                    setVente(res.data)
                })
            }
            
           axios.get("http://localhost:4000/api/piements/find/ca/"+props.match.params.id).then((ca)=>{
                setCA(ca.data)
            })
           
    },[])

    const deleteVente = (id) => {
      axios.delete("http://localhost:4000/api/piements/delete/" + id);
      Swal.fire("Action", "has been deleted successfully");
      const preventState = vente;
      const newState = preventState.filter((cat) => cat._id != id);
      setVente(newState);
    };

    

    return (
        <div className="col-lg-8 d-flex flex-column">
         
    <div className="row flex-grow">
      <div className="col-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <Link to ="/"><div className="mdi mdi-arrow-left-bold-circle ">
            </div></Link>
            <br></br>

            <div className="d-sm-flex justify-content-between align-items-start">
              <div className="d-flex align-center">
                <h4 className="card-title card-title-dash">Turnover :  
                 </h4>
                {chiffreAFF.map((ca)=>(
                    <h4 style={{color:"#DC143C"}}> {ca} DT</h4>))} 
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
                    <th>Klo</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {vente.map((cl) => (
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
                          <h6>{cl.client.nom}</h6>
                        </td>
                      </div>
                    </td>
                    <td>
                      <h6>{cl.client.adresse}</h6>
                    </td>
                    <td>
                    <h6>{cl.klo}</h6>

                    </td>
                    <td>
                        <h6 >{cl.prix}</h6>
                    </td>
                    <td>
                      <h6>{cl.date}</h6>
                    </td>
                    <td>
                    <div className="mdi mdi-delete"   onClick={() =>
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
                              deleteVente(cl._id);
                            }
                          })
                        }
                        ></div>
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
 
export default ListeVente;