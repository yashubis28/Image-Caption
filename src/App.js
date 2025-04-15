import './App.css';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import AddCaptionPage from './Components/AddCaption';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<SearchPage/>}/>
     <Route path='/AddCaptionPage' element={<AddCaptionPage/>}/>
     </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
