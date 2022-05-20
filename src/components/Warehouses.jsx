import Navbar from "./Navbar"
import Card from "./Card"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Warehouses = () => {

  const [warehouses, setWarehouses] = useState([])

  const fetchWarehouses = () => axios.get('http://localhost:3000/api/warehouses')
    .then((response) => {
      const warehouses = response.data
      setWarehouses(warehouses)
    })
    .catch(error => console.error('warehouses api req failed', error))

  const deleteWarehouse = (id) => {
    axios.delete(`http://localhost:3000/api/warehouses/${id}`)
    .then(fetchWarehouses)
  }

  useEffect(() => {
    fetchWarehouses()
  }, [])

  let navigate = useNavigate()

  const newWarehouseClickHandler = (evt) => {
    evt.preventDefault();
    navigate("./create", { replace: true })
  }

  return(
    <div>
    <Navbar />
      <span>
        <h2>All Warehouses</h2>
        <button
        className="new-warehouse-button"
        type="button"
        onClick={newWarehouseClickHandler}
        >
        Create New Warehouse
        </button>
        {warehouses.length === 0 ?
        <h1>No Warehouses in DB</h1> :
        <div>
          {warehouses.map(warehouse => {
          return (
          <Card
            key={warehouse.id}
            id={warehouse.id}
            name={warehouse.name}
            delete={deleteWarehouse}
            navigate={navigate}
            />
          )
        })}
        </div>
        }
      </span>
    </div>
  )
}

export default Warehouses
