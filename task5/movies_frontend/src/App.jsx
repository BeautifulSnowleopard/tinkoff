import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListPage } from './pages/ListPage';
import { theme } from './theme.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListPage />} path={'/*'}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
