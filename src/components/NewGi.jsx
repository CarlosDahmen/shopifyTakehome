import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const NewGi = () => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')

  const createNewGi = (data) => {
    axios.post('http://localhost:3000/api/gis/', data)
    .catch(error => console.error('gis api post failed', error))
  }

  const createHandler = evt => {
    evt.preventDefault()
    createNewGi({ brand, model })
    setBrand('')
    setModel('')

  }

  return (
    <div>
    <Navbar />
    <div className="create-gi-form">
      <form onSubmit={createHandler}>
        <label htmlFor="giBrand">Gi Brand:</label>
        <input name="brand" onChange={(evt) => setBrand(evt.target.value)} value={brand} />
        <label htmlFor="giModel">Last Name:</label>
        <input name="model" onChange={(evt) => setModel(evt.target.value)} value={model} />
        <button type="submit">Submit</button>
      </form>
    </ div>
    </div>
  )
};

export default NewGi
