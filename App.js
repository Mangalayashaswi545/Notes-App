
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';
import EditNotes from './Components/EditNotes';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesForm />} />
          <Route path='/allNotes' element={<AllNotes />} />
          <Route path='/editNotes' element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
