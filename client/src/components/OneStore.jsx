import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams, Link } from 'react-router-dom'


const OneStore = () => {

    const [stores, setStores] = useState(null)
    const nav =useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/stores/" + id)
            .then(res => {
                console.log(res.data)
                setStores(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])



    return (
        <div>
            <div className=" mx-auto d-flex justify-content-around  align-item-center shadow p-3 mb-5 bg-white rounded">
                <div><h1 className='text-primary fst-italic'> Store Finder</h1></div>
                <div><Link className="fs-2 fst-italic" to={"/"} > Go Back Home </Link></div>
            </div>
            <div className='card bg-light rounded-5 p-5 shadow-lg mt-5 mb-5 w-50 mx-auto'>
                {
                    stores ? (
                        <>
                            <h2>{stores.storeName}</h2>
                            <h2>{stores.storeNumber}</h2>
                            <h2>{stores.open? "Open" :"Closed"}</h2>



                        </>
                    ) : <h3>Loading ...</h3>
                }
            </div>
            <div>
                <button className='btn btn-outline-warning' onClick={() => nav(`/stores/edit/${id}`)}   >Edit Store Details</button>
            </div>
        </div>
)
}

export default OneStore