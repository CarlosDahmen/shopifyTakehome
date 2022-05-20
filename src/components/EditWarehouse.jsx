import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const EditWarehouse = (props) => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const pathname = location.pathname;

  const fetchWarehouse = () => {
    axios.get(`http://localhost:3000/api${pathname}`)
    .then((response) => {
      const warehouse = response.data
      setName(warehouse.warehouse.name)
      setAddress(warehouse.warehouse.address)
      setDescription(warehouse.warehouse.description)
    })
    .catch(error => console.error('warehousess api req failed', error))
  }

  const updateWarehouse = (data) => {
    axios.put(`http://localhost:3000/api${pathname}`, data)
    .then(
      setName(''),
      setAddress(''),
      setDescription('')
    )
  }

  const submitHandler = evt => {
    evt.preventDefault()
    updateWarehouse({ name, address, description })
  }

  useEffect(() => {
    fetchWarehouse()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="update-warehouse-form">
        <form onSubmit={submitHandler}>
          <label htmlFor="warehouseName">Warehouse Name:</label>
          <input name="name" onChange={(evt) => setName(evt.target.value)} value={name} />
          <label htmlFor="warehouseAddress">Warehouse Address:</label>
          <input name="address" onChange={(evt) => setAddress(evt.target.value)} value={address} />
          <label htmlFor="warehouseDescription">Warehouse Description:</label>
          <input name="description" onChange={(evt) => setDescription(evt.target.value)} value={description} />
          <button type="submit">Update</button>
        </form>
      </ div>
    </div>
  )
};

export default EditWarehouse
