import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from './components/Layout';
import { Rockets, Missions, MyProfile } from './routes';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { getMission } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
    dispatch(fetchRockets());
  }, [dispatch]);

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
