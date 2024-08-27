import './App.css';
// import { Container } from 'react-bootstrap';
import NavBar from './compoenent/NavBar';
import MovieList from './compoenent/MovieList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoveDetails from './compoenent/MoveDetails';

// import Paginationn from './compoenent/Paginationn';

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      {/* <Container> */}
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="/movie/:id" element={<MoveDetails/>}/>
         </Routes>
        </BrowserRouter>
      {/* </Container> */}
    </div>
  );
}

export default App;

