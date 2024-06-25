import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Update = () => {
    const [stores, setStores] = useState(null)
    const [storeName, setStoreName] = useState("")
    const [storeNumber, setStoreNumber] = useState(null)
    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})

    const { id } = useParams()
    const nav = useNavigate()

    const UpdateHandler = (e) => {
        e.preventDefault()
        console.log("it is working")
        
        axios.patch(`http://localhost:8000/api/stores/${id}`,  { storeName, storeNumber, open })
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav(`/stores/${res.data._id}`)
            })
            .catch(err => { setErrors(err.response.data.errors) })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/stores/" + id)
            .then(res => {
                console.log(res.data)
                setStoreName(res.data.storeName)
                setStoreNumber(res.data.storeNumber)
                setOpen(res.data.open)
              
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

            <form className="mt-5 p-5 w-50 mx-auto shadow-lg  mb-5 bg-body-tertiary rounded-5" onSubmit={UpdateHandler}>
                <h4 className='text-info text-start'> Edit this Store !</h4>

                <div class="form-group">
                    <label className='text-primary fs-2'>Store Name:</label>
                    <input type="text" className="form-control w-75 mx-auto mt-3" value={storeName} onChange={e => { setStoreName(e.target.value) }} placeholder="Store Name" />
                </div>
                {
                    errors.storeName ?
                        <p className='text-danger'>{errors.storeName.message}</p>
                        : null
                }

                <div class="form-group">
                    <label className='text-primary fs-2'>Store Number:</label>
                    <input type="number" className="form-control w-75 mx-auto mt-3" value={storeNumber} onChange={e => { setStoreNumber(e.target.value) }} placeholder="Store Number" />
                </div>
                {
                    errors.storeNumber ?
                        <p className='text-danger'>{errors.storeNumber.message}</p>
                        : null
                }
                <div class="form-group">
                  
                    <input type='checkbox'  checked={open} onChange={e =>{setOpen(e.target.checked)}}/>
                    Open:
                </div>

                <div className='mt-5 d-flex justify-content-around'>
                    <button className='btn btn-outline-primary'>Edit Store </button>

                </div>

            </form>


        </div>
    )
}

export default Update