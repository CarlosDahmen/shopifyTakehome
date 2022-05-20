import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const NewWarehouse = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const createNewWarehouse = (data) => {
    axios.post('http://localhost:3000/api/warehouses/', data)
    .catch(error => console.error('warehouses api post failed', error))
  }

  const createHandler = evt => {
    evt.preventDefault()
    createNewWarehouse({ name, address, description })
    setName('')
    setAddress('')
    setDescription('')
  }

  return (
    <div>
    <Navbar />
    <div className="create-warehouse-form">
      <form onSubmit={createHandler}>
        <label htmlFor="warehouseName">Warehouse Name:</label>
        <input name="name" onChange={(evt) => setName(evt.target.value)} value={name} />
        <label htmlFor="warehouseAddress">Warehouse Address:</label>
        <input name="address" onChange={(evt) => setAddress(evt.target.value)} value={address} />
        <label htmlFor="warehouseDescription">Warehouse Description:</label>
        <input name="description" onChange={(evt) => setDescription(evt.target.value)} value={description} />
        <button type="submit">Submit</button>
      </form>
    </ div>
    </div>
  )
};

export default NewWarehouse
