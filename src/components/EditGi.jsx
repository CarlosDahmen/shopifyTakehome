import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const EditGi = (props) => {

  const pathname = location.pathname;

  const fetchGi = () => {
    axios.get(`http://localhost:3000/api${pathname}`)
    .then((response) => {
      const gi = response.data
      setBrand(gi.gi.brand)
      setModel(gi.gi.model)
    })
    .catch(error => console.error('gis api req failed', error))
  }

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')

  const updateGi = (data) => {
    axios.put(`http://localhost:3000/api${pathname}`, data)
  }

  const submitHandler = evt => {
    evt.preventDefault()
    updateGi({ brand, model })
    setBrand('')
    setModel('')
  }

  useEffect(() => {
    fetchGi()
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
          <button type="submit">Update</button>
        </form>
      </ div>
    </div>
  )
};

export default EditGi
