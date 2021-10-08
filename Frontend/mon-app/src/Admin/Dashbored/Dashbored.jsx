import React, { useEffect } from 'react';
import Client from '../Components/Client/Client';
import {withRouter} from 'react-router-dom';
import axios from "axios"
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
const Dashbored = (props) => {

  useEffect(()=>{
    console.log(props)
    axios.get("http://localhost:4000/api/users/verif").then((res)=>{
        props.setUser(res.data)
    }).catch((error)=>{
        if(error.response.status === 403){
            props.history && props.history.replace('/login')
            props.setUser(null)
        }
    } )
},[])

  const logout = async ()=>{
    try{
     await axios.post('http://localhost:4000/api/users/logout')
     props.history.replace('/login')
    }
    catch(error){

    }
 }



    return (<div>
            <div className="container-scroller"> 
                <Navbar logout ={logout} />
          <div className="container-fluid page-body-wrapper">
       
                <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="home-tab">
                    
                      <div className="tab-content tab-content-basic">
                        <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                          
                       
                          <div className="row">
                                {props.children}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Premium</span>
                  <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
                </div>
              </footer>
            </div>
          </div>
        </div>

      </div>

        
      );
}
 
export default withRouter(Dashbored);