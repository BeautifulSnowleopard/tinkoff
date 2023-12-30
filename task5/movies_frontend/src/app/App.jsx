import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesPage } from '../pages/movies-page/MoviesPage.jsx';
import { EditPage } from '../pages/movies-page/EditPage.jsx';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MoviesPage />} path={'/*'}>
          <Route path={'movie/:id/edit'} element={<EditPage />} />
          <Route path={'movie/:id'} element={<MoviesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
