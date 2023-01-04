import {BrowserRouter as Router, Route, Routes} from   'react-router-dom';

import {Box} from '@mui/material'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';


function App() {
  return (
    <Box width="400px">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        <Footer />  
      </Router> 
    </Box>
  );
}

export default App;
