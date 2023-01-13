import { Header, Footer } from './Components/Layout';
import { HomePage, BookingPage } from './Pages';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
