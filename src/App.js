import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard';
import Login from '../src/pages/Login';
import Inventory from './pages/Inventory';
import AddItem from './pages/AddItem';
import Retailers from './pages/Retailers';
import Supply from './pages/Supply';
import Sales from './pages/Sales';
import Invoice from './pages/Invoice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/create' element={<AddItem />} />
        <Route path='/retailers' element={<Retailers />} />
        <Route path='/supply' element={<Supply />} />
        <Route path='/supply/:retailerCode' element={<Supply />} />
        <Route path='/sales/' element={<Sales />} />
        <Route path='/invoice/:id' element={<Invoice />} />
        <Route path='/invoice' element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
