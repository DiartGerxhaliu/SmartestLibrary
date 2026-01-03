import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/templates/Home.jsx'
import Menu from './components/Organisms/Menu';
import Footer from './components/Organisms/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
