import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesPage } from '../pages/movies-page/MoviesPage.jsx';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MoviesPage />} path={'/*'}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
