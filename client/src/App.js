import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert'
//Redux imports
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>
    <>
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </>
  </Provider>
  );
}

export default App;
