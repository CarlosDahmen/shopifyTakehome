import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import Card from './Card';

const EditWarehouse = (props) => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [gis, setGis] = useState([])

  const pathname = location.pathname;

  const fetchWarehouse = () => {
    axios.get(`http://localhost:3000/api${pathname}`)
    .then((response) => {
      const warehouse = response.data.warehouse;
      const gis = response.data.gis;
      setName(warehouse.name)
      setAddress(warehouse.address)
      setDescription(warehouse.description)
      setGis(gis)
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
        <h2>Gis in this Warehouse:</h2>
        {
        gis.length === 0 ? <h3>No Gis assigned to this warehouse</h3>  :
        gis.map(gi => {
            return <h3>{gi.brand} {gi.model}</h3>
        })
        }
      </ div>
    </div>
  )
};

export default EditWarehouse
