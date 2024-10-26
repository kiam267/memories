import { Container } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

//Component Imports
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
