import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import requests from './api/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Footer from "./components/Footer"
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />

    </div>
  )
}


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
