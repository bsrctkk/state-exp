import React, { useState } from 'react'

export default function BookList() {
    let booksData=[
        {
            bookName:"Kumarbaz",
            writer:"Dostoyevski",
            year:"2001"
        },
        {
            bookName:"Süleyman'ın Anahtarı",
            writer:"jose Rodrigues..",
            year:"2016"
        }
    ]
    const [books, setbooks] = useState(booksData)

    const [bookName, setbookName] = useState('')
    const [writer, setwriter] = useState('')
    const [year, setyear] = useState('')

    const add = () => {
        let newBook = {
            bookName:bookName,
            writer:writer,
            year:year
        }

        setbooks([...books,newBook])
    }

  return (<>
    <div>
        <label>BookName: </label>
        <input type='text' onChange={(e) => setbookName(e.target.value)} />
    </div>
    <div>
        <label>Writer: </label>
        <input type='text' onChange={(e) => setwriter(e.target.value)} />
    </div>
    <div>
        <label>Year: </label>
        <input type='text' onChange={(e) => setyear(e.target.value)} />
    </div>
    <div>
        <button onClick={add}>Add</button>
    </div>

    <hr></hr>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {
                books.map((item) => {
                    return <tr>
                        <td>{item.bookName}</td>
                        <td>{item.writer}</td>
                        <td>{item.year}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </>
  )
}