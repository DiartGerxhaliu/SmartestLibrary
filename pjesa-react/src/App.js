import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/templates/Home.jsx'
import Menu from './components/Organisms/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
