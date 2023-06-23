import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CategoryPage() {

    const [categoryName, setcategoryName] = useState('');
    const[categoryDescription, setcategoryDescription] = useState('');

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData =() => {
        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data);
            })
    }

    const addCategory = () => {
        let newCategory = {
            name:categoryName,
            description:categoryDescription
        }

        axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => {
                loadData();
            })
    }

  return (<>
     <div>
            <label>Category Name:</label>
            <input type='text' value={categoryName} onChange={(e) => setcategoryName(e.target.value)} />
        </div>

        <div>
            <label> Description:</label>
            <input type='text' value={categoryDescription} onChange={(e) => setcategoryDescription(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addCategory()}>Add</button>
        </div>

        <hr />

        <table style={{ borderCollapse: 'collapse', width: '100%',textAlign:'center' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
  )
}
