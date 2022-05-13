import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home'
import Login from './pages/login/Login';
import User from './pages/User/User';
import PersonalDetail from './pages/personalDetail/personalDetail'
function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Routes>
            <Route path='/' element ={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/user/detail' element={<PersonalDetail />} />
          </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;
