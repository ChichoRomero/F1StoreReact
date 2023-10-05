import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
          {/* <ItemListContainer greeting={'Welcome to the F1 Store'}/>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Items added: ', quantity)}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
