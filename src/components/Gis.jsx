import Navbar from "./Navbar"
import Card from "./Card"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Gis = () => {
  const [gis, setGis] = useState([])

  const fetchGis = () => axios.get('http://localhost:3000/api/gis')
    .then((response) => {
      const gis = response.data
      setGis(gis)
    })
    .catch(error => console.error('gis api req failed', error))


  const deleteGi = (id) => {
    axios.delete(`http://localhost:3000/api/gis/${id}`)
    .then(fetchGis)
  }

  useEffect(() => {
    fetchGis()
  }, [])

  let navigate = useNavigate()

  const newGiClickHandler = (evt) => {
    evt.preventDefault();
    navigate("./create", { replace: true })
  }

  return (
    <div>
    <Navbar />
      <span>
        <h2>All Gis</h2>
        <button
        className="new-gi-button"
        type="button"
        onClick={newGiClickHandler}
        >
        Create New Gi
        </button>
        {gis.length === 0 ?
        <h1>No Gis</h1> :
        <div>
          {gis.map(gi => {
          return (
          <Card
            key={gi.id}
            id={gi.id}
            name={`${gi.brand} ${gi.model}`}
            delete={deleteGi}
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

export default Gis
