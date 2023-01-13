import { Header, Footer } from './Components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './Main';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
