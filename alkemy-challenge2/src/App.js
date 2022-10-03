//Librerías
import {Routes, Route} from 'react-router-dom'
//Components
import Login from './components/Login';
import List from './components/List';
import Detail from './components/Detail';
//Estilos
import './App.css';

function App() {
  const token = sessionStorage.getItem('myToken') 
  
  return (
    <>
      <Routes>
        <Route path="/" element={!token? <Login/> : <List/>}/>
        <Route path= "/list" element= {<List/>}/>
        <Route path= "/detail" element= {<Detail/>}/>
      </Routes>
    </>

  );
}

export default App;
