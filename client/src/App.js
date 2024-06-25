import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';
import OneStore from './components/OneStore';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={ <Dashboard />} />
        <Route path="/stores/add"  element={ <Create />} />
        <Route path="/stores/:id" element = {<OneStore />} />
        <Route path="/stores/edit/:id" element = {<Update />} />

      </Routes>
    </div>
  );
}

export default App;
