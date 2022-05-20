import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Gis from './Gis'
import Warehouses from './Warehouses'
import NewGi from './NewGi'
import EditGi from './EditGi';
import NewWarehouse from './NewWarehouse';
import EditWarehouse from './EditWarehouse';

function Router(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/gis' element={<Gis/>} />
        <Route path='/gis/create' element={<NewGi/>} />
        <Route path='/gis/:giId' element={<EditGi/>} />
        <Route path='/warehouses' element={<Warehouses/>} />
        <Route path='/warehouses/create' element={<NewWarehouse/>} />
        <Route path='/warehouses/:warehouseId' element={<EditWarehouse/>} />
      </Routes>
    </div>
  )
}

export default Router;
