import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function OrderPage() {

    

    const [orders, setorders] = useState([]);

    const loadData = () =>{
        axios.get("https://northwind.vercel.app/api/orders")
            .then(res => {
                setorders(res.data);
            })
    }

    useEffect(() => {
        loadData();
    },[])

    
    const deleted = (orderId) => {
        axios.delete(`https://northwind.vercel.app/api/orders/${orderId}`)
            .then(res => {
                const updatedOrders = orders.filter(item => item.id !== orderId);
                setorders(updatedOrders);
            })
            .catch(error => {
                console.error(error);
            });
    }


  return (<>
  <h1>Total Order Count: {orders.length} </h1>
    <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Ship Name</th>
                    <th>Ship Via</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td style={{paddingLeft:'70px'}}>{item.shipName}</td>
                            <td style={{paddingLeft:'25px'}}>{item.shipVia}</td>
                            <td style={{paddingLeft:'20px'}}><button  onClick={() => deleted(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        </>
  )
}
