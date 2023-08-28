import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { Rockets, Missions, MyProfile } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
