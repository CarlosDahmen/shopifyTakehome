import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <div id='navbar'>
      <Link to='/gis'>Gis</Link>
      <Link to='/warehouses'>Warehouses</Link>
    </div>
  )
}

export default Navbar;
