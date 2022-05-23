import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const EditGi = (props) => {

  const pathname = location.pathname;

  const fetchGi = () => {
    axios.get(`http://localhost:3000/api${pathname}`)
    .then((response) => {
      const gi = response.data
      setBrand(gi.brand)
      setModel(gi.model)
    })
    .catch(error => console.error('gis api req failed', error))
  }

  const fetchWarehouses = () => axios.get('http://localhost:3000/api/warehouses')
  .then((response) => {
    const warehouses = response.data
    setWarehouses(warehouses)
  })
  .catch(error => console.error('warehouses api req failed', error))

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [warehouses, setWarehouses] = useState([])
  const [warehouseId, setWarehouseId] = useState(null)

  const updateGi = (data) => {
    axios.put(`http://localhost:3000/api${pathname}`, data)
  }

  const submitHandler = evt => {
    evt.preventDefault()
    updateGi({ brand, model, warehouseId })
    setBrand('')
    setModel('')
  }

  const changeHandler = evt => {
    setWarehouseId(evt.target.value)
  }

  useEffect(() => {
    fetchGi(),
    fetchWarehouses()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="update-gi-form">
        <form onSubmit={submitHandler}>
          <label htmlFor="giBrand">Gi Brand:</label>
          <input name="brand" onChange={(evt) => setBrand(evt.target.value)} value={brand} />
          <label htmlFor="giModel">Last Name:</label>
          <input name="model" onChange={(evt) => setModel(evt.target.value)} value={model} />
          <label>Assign to warehouse:</label>
          <select id="selected-warehouse" onChange={changeHandler}>
          <option value={null} key={0}>{'--'}</option>
            {warehouses.map(warehouse => {
              return(
                <option value={warehouse.id} key={warehouse.id}>{warehouse.name}</option>
              )
              })
            }
          </select>
          <button type="submit">Update</button>
        </form>
      </ div>
    </div>
  )
};

export default EditGi
