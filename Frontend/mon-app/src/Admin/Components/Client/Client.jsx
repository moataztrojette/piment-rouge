import React, { useEffect, useState } from 'react'
import Table from './TableClients/Table';
import Topclient from './TopClient/TopClients';
import axios from"axios"

const Client = () => {
    const [client,setClient] = useState([])
    useEffect(()=>{
        
        axios.get("http://localhost:4000/api/clients/findall").then((client)=>{
            setClient(client.data)
            console.log(client.data)
        })
    },[])
    return (<>
        <Table client={client} setClient={setClient}/>
        <Topclient />
    </>  );
}
 
export default Client;

