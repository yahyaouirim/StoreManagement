import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link , useNavigate} from 'react-router-dom'


const Dashboard = () => {
    const nav = useNavigate();

    const [stores, setStores] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/stores/")
            .then(res => {
                console.log(res.data);
                // const sortedAuthors = res.data.sort((a, b) => a.name.localeCompare(b.name));
                // setAuthors(sortedAuthors);
                setStores(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const deleteMe = (deleteId) => {
        axios.delete("http://localhost:8000/api/stores/" + deleteId)
            .then(res => {
                //----------------
                console.log("OK this Store has been Deleted ☠️", res.data)
                const filteredStores = stores.filter((store) => {
                    return store._id !== deleteId
                })
                setStores(filteredStores)
            })
            //----------------
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <div>
             <div className=" mx-auto d-flex justify-content-around  align-item-center shadow p-3 mb-5 bg-white rounded">
                <div><h1 className='text-primary fst-italic'> Store Finder</h1></div>
                <div><p> Find Stores in your area!</p></div>
            </div>
            <div className='container w-75 mt-5 d-flex justify-content-center'>
                <table className='table table-hover table-striped'>
                    <thead className='fs-3 mt-5 bg-black text-light '>
                        <th>Store</th>
                        <th>Store Number</th>
                        <th>Open</th>
                        <th>Remove</th>
                    </thead>
                    <tbody className='fs-4'>
                        {
                            stores.map((oneStore) => {
                                return (
                                    <tr key={oneStore._id}>
                                        <td><Link to ={`/stores/${oneStore._id}`}>{oneStore.storeName}</Link></td>
                                        <td>{oneStore.storeNumber}</td>
                                        <td> {oneStore.open? "True" : "False"}</td>
                                        <td className='d-flex justify-content-around'>
                                            <span><button className='btn btn-outline-danger' onClick={() => { deleteMe(oneStore._id) }}>Delete ❌</button></span>
                                        </td>

                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>

            </div>
            <div>
                <button className='btn btn-outline-primary mt-3 mb-5' onClick={() => { nav('/stores/add') }}>Can't Find Your Store ? </button>

            </div>
          

        </div>
    )
}

export default Dashboard