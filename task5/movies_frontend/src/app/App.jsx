import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesPage } from '../pages/movies-page/MoviesPage.jsx';
import { EditPage } from '../pages/movies-page/EditPage.jsx';
import { AddPage } from '../pages/movies-page/AddPage.jsx';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'movie/edit/:id'} element={<EditPage />} />
        <Route path={'movie/add'} element={<AddPage />} />
        <Route path={'movie/:id'} element={<MoviesPage />} />
        <Route path={'*'} element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
