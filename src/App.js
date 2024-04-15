import './App.css';
import CertificateContainer from './components/certificate/CertificateContainer';
import Login from './components/login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login></Login>}></Route>
        <Route path='ProudMemberCard' element={<CertificateContainer></CertificateContainer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
