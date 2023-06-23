import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ProductUpdate() {

    const [name, setname]= useState('');
    const [unitPrice, setunitPrice]= useState('');
    const [select, setselect]=useState(null);

    const [products, setproducts]=useState([]);

    const loadData = () => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data);
            })
    }

    useEffect(() => {
        loadData();
        if (select) {
            setname(select.name);
            setunitPrice(select.unitPrice);
        }else {
            setname('');
            setunitPrice('');
        }
    },[select])

    

    const productClick = (product) => {
        setselect(product);
    }

    const update= () => {
        const updatedProduct = { ...select, name, unitPrice };

        if(select) {
            axios.put(`https://northwind.vercel.app/api/products/${select.id}`, updatedProduct)
                .then(res => {
                loadData(); 
                setselect(null); 
                })
        }
    }
  return (<>
    <div style={{ display: 'flex', gap: '10px' }}>
        <div>
            <label>Product Name:</label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Unit Price:</label>
            <input type='text' value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
            <button onClick={update} >Update</button>
        </div>
    </div>
        

        <hr />

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        return <tr onClick={() => productClick(item)}>
                            <td>{item.id}</td>
                            <td style={{paddingLeft:'90px'}}>{item.name}</td>
                            <td style={{paddingLeft:'50px'}}>{item.unitPrice}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
  )
}
