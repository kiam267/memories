import { Container } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

//Component Imports
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import Auth from './components/Auth/Auth';
import Header from '../src/layout/Header';

function App() {
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
