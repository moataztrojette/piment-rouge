import './App.css';
import {React,useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashbored from './Admin/Dashbored/Dashbored';
import Client from './Admin/Components/Client/Client';
import ListeVente from './Admin/Components/Client/Liste_Vente/ListeVente';
import Login from "./Admin/Components/Authentification/Login/Login"
import Singup from "./Admin/Components/Authentification/Singup/Singup"
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      
      <BrowserRouter>
         <Switch>
           <Route path ="/login" component={Login}/>
          <Route path ="/singup" component={Singup}/>

          <Dashbored setUser={setUser} >
              <Route path='/liste/:id' component={ListeVente}/>
              <Route path ='/' exact component={Client} />

          </Dashbored>


 
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
